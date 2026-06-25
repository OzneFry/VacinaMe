import React from 'react';
import { Pressable, Text, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  className?: string;
};

export function AppButton({ title, onPress, style, textStyle, className }: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className={`min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 shadow-sm ${className ?? ''}`}
      style={({ pressed }) => [pressed ? { opacity: 0.92, transform: [{ scale: 0.98 }] } : null, style]}
    >
      <Text className="text-[15px] font-semibold text-white" style={textStyle}>{title}</Text>
    </Pressable>
  );
}
