import React from 'react';
import { Text, View } from 'react-native';

interface VaccineCardProps {
  title: string;
  subtitle?: string;
}

export function VaccineCard({ title, subtitle }: VaccineCardProps) {
  return (
    <View style={{ padding: 12, borderRadius: 8, backgroundColor: '#fff' }}>
      <Text>{title}</Text>
      {subtitle ? <Text>{subtitle}</Text> : null}
    </View>
  );
}
