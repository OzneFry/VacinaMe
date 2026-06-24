import React from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { theme } from '../../theme';

export function Input(props: TextInputProps) {
  const { style, ...rest } = props;

  return (
    <TextInput
      {...rest}
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.mutedText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    color: theme.colors.text,
    fontSize: 15,
  },
});
