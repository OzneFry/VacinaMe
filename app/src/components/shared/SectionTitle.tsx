import React from 'react';
import { Text, View } from 'react-native';

interface SectionTitleProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export function SectionTitle({ title, description, eyebrow }: SectionTitleProps) {
  return (
    <View className="gap-2">
      {eyebrow ? <Text className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{eyebrow}</Text> : null}
      <Text className="text-2xl font-bold leading-8 text-slate-900">{title}</Text>
      {description ? <Text className="text-sm leading-6 text-slate-600">{description}</Text> : null}
    </View>
  );
}