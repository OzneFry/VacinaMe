import React from 'react';
import { View, type ViewProps } from 'react-native';

interface CardProps extends React.PropsWithChildren<ViewProps> {
  variant?: 'default' | 'elevated';
  className?: string;
}

export function Card({ children, style, className, variant = 'default', ...props }: CardProps) {
  return (
    <View
      className={`rounded-2xl border border-slate-200 bg-white p-4 ${variant === 'elevated' ? 'shadow-sm shadow-slate-300/30' : ''} ${className ?? ''}`}
      style={style}
      {...props}
    >
      {children}
    </View>
  );
}
