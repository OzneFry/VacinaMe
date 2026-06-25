import React from 'react';
import { Text, View } from 'react-native';

interface StatusBadgeProps {
  label: string;
  icon?: React.ReactNode;
  status?: 'available' | 'queue' | 'unavailable' | 'info' | 'success' | 'warning' | 'danger' | 'neutral';
}

const statusClasses = {
  available: 'bg-emerald-100 text-emerald-700',
  queue: 'bg-amber-100 text-amber-700',
  unavailable: 'bg-slate-200 text-slate-600',
  info: 'bg-blue-100 text-blue-700',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
  neutral: 'bg-slate-100 text-slate-600',
} as const;

export function StatusBadge({ label, icon, status = 'neutral' }: StatusBadgeProps) {
  return (
    <View className={`self-start flex-row items-center gap-1.5 rounded-full px-3 py-1.5 ${statusClasses[status]}`}>
      {icon}
      <Text className="text-xs font-bold">{label}</Text>
    </View>
  );
}