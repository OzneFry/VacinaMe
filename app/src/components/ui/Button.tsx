import React from 'react';
import { Pressable, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

interface ButtonProps extends React.PropsWithChildren<PressableProps> {
  label?: string;
  title?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  style?: StyleProp<ViewStyle>;
  className?: string;
}

const variantClasses = {
  primary: 'bg-blue-600',
  secondary: 'border border-slate-200 bg-white',
  danger: 'bg-red-500',
} as const;

const textClasses = {
  primary: 'text-white',
  secondary: 'text-slate-700',
  danger: 'text-white',
} as const;

export function Button({ label, title, variant = 'primary', style, className, disabled, children, ...props }: ButtonProps) {
  const text = label ?? title ?? 'Continuar';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      className={`min-h-12 items-center justify-center rounded-xl px-6 py-3 shadow-sm ${variantClasses[variant]} ${disabled ? 'opacity-60' : ''} ${className ?? ''}`}
      style={({ pressed }) => [pressed && !disabled ? { opacity: 0.9, transform: [{ scale: 0.98 }] } : null, style]}
      {...props}
    >
      {children ?? <Text className={`text-[15px] font-bold ${textClasses[variant]}`}>{text}</Text>}
    </Pressable>
  );
}
