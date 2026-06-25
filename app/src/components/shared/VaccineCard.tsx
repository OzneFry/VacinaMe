import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { CheckCircle2, Clock3, ChevronRight, MapPin } from 'lucide-react-native';

import { AppCard } from './AppCard';
import { StatusBadge } from './StatusBadge';

interface VaccineCardProps {
  title: string;
  local?: string;
  date?: string;
  status?: 'available' | 'queue' | 'unavailable';
  onPress?: () => void;
}

const statusInfo = {
  available: { label: 'Disponível', hint: 'Pode ser aplicada agora.' },
  queue: { label: 'Em fila', hint: 'Aguardando liberação.' },
  unavailable: { label: 'Indisponível', hint: 'Sem doses no momento.' },
} as const;

export function VaccineCard({ title, local, date, status = 'available', onPress }: VaccineCardProps) {
  const content = (
    <AppCard variant="elevated" className="gap-4">
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1 flex-row items-start gap-3">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
            <CheckCircle2 size={20} color={status === 'unavailable' ? '#94a3b8' : '#2563eb'} />
          </View>
          <View className="flex-1 gap-1">
            <Text className="text-lg font-bold text-slate-900">{title}</Text>
            <Text className="text-sm leading-5 text-slate-500">{statusInfo[status].hint}</Text>
          </View>
        </View>
        <StatusBadge
          label={statusInfo[status].label}
          status={status === 'available' ? 'available' : status === 'queue' ? 'warning' : 'neutral'}
        />
      </View>

      <View className="gap-2">
        {local ? (
          <View className="flex-row items-center gap-2">
            <MapPin size={16} color="#64748b" />
            <Text className="text-sm text-slate-600">{local}</Text>
          </View>
        ) : null}
        {date ? (
          <View className="flex-row items-center gap-2">
            <Clock3 size={16} color="#2563eb" />
            <Text className="text-sm font-medium text-blue-700">Aplicação: {date}</Text>
          </View>
        ) : null}
      </View>

      <View className="flex-row items-center gap-2 pt-1">
        {status === 'available' ? <CheckCircle2 size={16} color="#16a34a" /> : null}
        <View className="flex-row items-center gap-1 rounded-xl bg-blue-50 px-3 py-2">
          <Text className="text-sm font-semibold text-blue-700">Ver detalhes</Text>
          <ChevronRight size={16} color="#2563eb" />
        </View>
      </View>
    </AppCard>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => (pressed ? { opacity: 0.95, transform: [{ scale: 0.995 }] } : null)}>
        {content}
      </Pressable>
    );
  }

  return (
    <View>{content}</View>
  );
}
