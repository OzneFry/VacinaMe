import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../../components/ui/Card';
import { theme } from '../../theme';

export function RegionSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.subtitle}>Defina a região da sua unidade de saúde.</Text>

      <Card variant="elevated" style={styles.card}>
        <Text style={styles.cardTitle}>Unidade de saúde</Text>
        <Text style={styles.cardText}>UBS Central • Zona Norte</Text>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.mutedText,
    marginBottom: theme.spacing.lg,
  },
  card: {
    paddingVertical: theme.spacing.lg,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  cardText: {
    color: theme.colors.mutedText,
  },
});
