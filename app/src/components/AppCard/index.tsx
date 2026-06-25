import React from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';

type AppCardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
};

export function AppCard({ children, style, className }: AppCardProps) {
  return <View className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-300/30 ${className ?? ''}`} style={style}>{children}</View>;
}
