import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../theme';

interface LoadingProps {
  label?: string;
}

export function Loading({ label = 'Carregando...' }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  label: {
    marginTop: theme.spacing.sm,
    color: theme.colors.mutedText,
    fontSize: 14,
  },
});
