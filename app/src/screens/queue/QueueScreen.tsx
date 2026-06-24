import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../../components/ui/Card';
import { theme } from '../../theme';

const queueItems = [
  { title: 'Pré-atendimento', time: '09:00', status: 'Em andamento' },
  { title: 'Triagem', time: '09:15', status: 'Próximo' },
  { title: 'Aplicação', time: '09:30', status: 'Aguardando' },
];

export function QueueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fila</Text>
      <Text style={styles.subtitle}>Acompanhe a fila de vacinação aqui.</Text>

      <Card variant="elevated" style={styles.card}>
        {queueItems.map((item, index) => (
          <View key={item.title} style={styles.itemRow}>
            <View style={styles.timeline}>
              <View style={styles.dot} />
              {index < queueItems.length - 1 ? <View style={styles.line} /> : null}
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemMeta}>{item.time}</Text>
              <Text style={styles.itemStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
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
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  timeline: {
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    marginTop: 4,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: theme.colors.border,
    marginTop: 4,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 2,
  },
  itemMeta: {
    color: theme.colors.mutedText,
    marginBottom: 2,
  },
  itemStatus: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
});
