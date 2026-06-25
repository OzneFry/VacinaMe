import React from 'react';
import { Text, View } from 'react-native';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View className="px-4 py-2">
      <Text className="text-2xl font-bold leading-8 text-slate-900">{title}</Text>
    </View>
  );
}
