import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../theme';

const cards = [
  { title: 'Vacinas', subtitle: 'Consulte a agenda disponível', icon: '💉', route: 'Vacinas' },
  { title: 'Fila', subtitle: 'Acompanhe sua posição', icon: '🕒', route: 'Fila' },
  { title: 'Configuração', subtitle: 'Ajuste sua unidade', icon: '⚙️', route: 'Configurações' },
];

export function DashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao VacinaMe</Text>
        <Text style={styles.subtitle}>Acompanhe sua vacinação com mais clareza.</Text>
      </View>

      <View style={styles.grid}>
        {cards.map((item) => (
          <Pressable key={item.title} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.mutedText,
  },
  grid: {
    gap: theme.spacing.md,
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
  icon: {
    fontSize: 28,
    marginBottom: theme.spacing.sm,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: theme.colors.mutedText,
  },
});
