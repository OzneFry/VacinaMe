import React from 'react';
import { View, type ViewProps } from 'react-native';

interface AppCardProps extends React.PropsWithChildren<ViewProps> {
  variant?: 'default' | 'elevated' | 'accent';
  className?: string;
}

const variantClasses = {
  default: 'border border-slate-200 bg-white',
  elevated: 'border border-slate-200 bg-white shadow-sm shadow-slate-300/30',
  accent: 'border border-blue-100 bg-blue-50/80',
} as const;

export function AppCard({ children, style, className, variant = 'default', ...props }: AppCardProps) {
  return (
    <View
      className={`rounded-2xl p-4 ${variantClasses[variant]} ${className ?? ''}`}
      style={style}
      {...props}
    >
      {children}
    </View>
  );
}