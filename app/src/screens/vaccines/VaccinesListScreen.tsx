import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { theme } from '../../theme';

const vaccines = [
  { id: '1', name: 'Pfizer', local: 'UBS Central', date: '2025-07-01', status: 'disponível' },
  { id: '2', name: 'Coronavac', local: 'Posto Saúde Norte', date: '2025-07-03', status: 'fila' },
  { id: '3', name: 'Hepatite B', local: 'Unidade Vila Nova', date: '2025-07-05', status: 'indisponível' },
];

const statusStyles: Record<string, { background: string; text: string; label: string }> = {
  disponível: { background: theme.colors.success, text: theme.colors.surface, label: 'Disponível' },
  fila: { background: theme.colors.warning, text: theme.colors.surface, label: 'Na fila' },
  indisponível: { background: theme.colors.border, text: theme.colors.mutedText, label: 'Indisponível' },
};

export function VaccinesListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacinas</Text>
      <Text style={styles.subtitle}>Escolha uma vacina para ver mais detalhes.</Text>
      <FlatList
        data={vaccines}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const status = statusStyles[item.status];

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('VaccineDetails', {
                  vaccineName: item.name,
                  vaccineDate: item.date,
                  vaccineLocal: item.local,
                  vaccineStatus: item.status,
                })
              }
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <View style={[styles.badge, { backgroundColor: status.background }]}> 
                  <Text style={[styles.badgeText, { color: status.text }]}>{status.label}</Text>
                </View>
              </View>
              <Text style={styles.cardSubtitle}>{item.local}</Text>
              <Text style={styles.cardDate}>Aplicação: {item.date}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.mutedText,
    marginBottom: theme.spacing.md,
  },
  list: {
    gap: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    flexShrink: 1,
  },
  cardSubtitle: {
    color: theme.colors.mutedText,
    marginBottom: 4,
  },
  cardDate: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  badge: {
    borderRadius: theme.borderRadius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
