import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { theme } from '../../theme';

export function VaccineDetailsScreen() {
  const route = useRoute<any>();
  const vaccineName = route.params?.vaccineName ?? 'Vacina';
  const vaccineDate = route.params?.vaccineDate ?? 'Data não informada';
  const vaccineLocal = route.params?.vaccineLocal ?? 'Local não informado';
  const vaccineStatus = route.params?.vaccineStatus ?? 'disponível';

  const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
    disponível: { label: 'Disponível', color: theme.colors.success, bg: '#dcfce7' },
    fila: { label: 'Na fila', color: theme.colors.warning, bg: '#fef3c7' },
    indisponível: { label: 'Indisponível', color: theme.colors.mutedText, bg: '#e2e8f0' },
  };

  const status = statusConfig[vaccineStatus] ?? statusConfig.disponível;

  return (
    <View style={styles.container}>
      <Card variant="elevated" style={styles.card}>
        <View style={[styles.statusBadge, { backgroundColor: status.bg }]}> 
          <Text style={[styles.statusText, { color: status.color }]}>{status.label}</Text>
        </View>
        <Text style={styles.title}>{vaccineName}</Text>
        <Text style={styles.subtitle}>Local: {vaccineLocal}</Text>
        <Text style={styles.subtitle}>Data: {vaccineDate}</Text>
        <Text style={styles.description}>Detalhes da vacina exibidos a partir da navegação em stack.</Text>
        <Button label="Entrar na fila" style={styles.button} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  card: {
    paddingVertical: theme.spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: theme.spacing.xs,
    color: theme.colors.mutedText,
  },
  description: {
    marginTop: theme.spacing.md,
    color: theme.colors.mutedText,
    lineHeight: 20,
  },
  button: {
    marginTop: theme.spacing.lg,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    borderRadius: theme.borderRadius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    marginBottom: theme.spacing.md,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
