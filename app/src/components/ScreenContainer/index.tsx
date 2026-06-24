import React from 'react';
import { SafeAreaView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { theme } from '../../theme';

type ScreenContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

export function ScreenContainer({ children, style, contentStyle }: ScreenContainerProps) {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <View style={[styles.container, contentStyle]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
});
