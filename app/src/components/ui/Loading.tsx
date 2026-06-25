import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

interface LoadingProps {
  label?: string;
}

export function Loading({ label = 'Carregando...' }: LoadingProps) {
  return (
    <View className="flex-1 items-center justify-center p-6">
      <View className="w-full max-w-xs items-center rounded-2xl border border-slate-200 bg-white px-6 py-8">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-3 text-sm font-semibold text-slate-700">{label}</Text>
        <Text className="mt-1 text-xs text-slate-500">Isso pode levar alguns segundos.</Text>
      </View>
    </View>
  );
}
