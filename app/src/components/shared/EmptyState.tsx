import React from 'react';
import { Text, View } from 'react-native';

interface EmptyStateProps {
  title: string;
  description?: string;
  suggestedAction?: string;
}

export function EmptyState({ title, description, suggestedAction }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center rounded-2xl bg-slate-100 p-8">
      <View className="mb-4 h-14 w-14 items-center justify-center rounded-full bg-blue-100">
        <Text className="text-2xl text-blue-600">✚</Text>
      </View>
      <Text className="mb-2 text-center text-base font-bold text-slate-800">{title}</Text>
      {description ? <Text className="text-center text-sm leading-6 text-slate-500">{description}</Text> : null}
      {suggestedAction ? <Text className="mt-3 text-center text-sm font-medium text-slate-600">{suggestedAction}</Text> : null}
    </View>
  );
}
