import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { theme } from '../../theme';

interface CardProps extends ViewProps {
  variant?: 'default' | 'elevated';
}

export function Card({ children, style, variant = 'default', ...props }: CardProps) {
  return (
    <View style={[styles.card, variant === 'elevated' && styles.elevated, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  elevated: {
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
});
