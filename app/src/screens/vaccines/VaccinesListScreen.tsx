import React from 'react';
import { FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppCard } from '../../components/shared/AppCard';
import { ScreenContainer } from '../../components/shared/ScreenContainer';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { VaccineCard } from '../../components/shared/VaccineCard';

const vaccines = [
  { id: '1', name: 'Pfizer', local: 'UBS Central', date: '2025-07-01', status: 'disponível' },
  { id: '2', name: 'Coronavac', local: 'Posto Saúde Norte', date: '2025-07-03', status: 'fila' },
  { id: '3', name: 'Hepatite B', local: 'Unidade Vila Nova', date: '2025-07-05', status: 'indisponível' },
];

const statusMap = {
  disponível: 'available',
  fila: 'queue',
  indisponível: 'unavailable',
} as const;

type VaccineStatus = keyof typeof statusMap;

export function VaccinesListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScreenContainer contentClassName="gap-4" scrollable={false}>
      <SectionTitle
        eyebrow="Vacinas"
        title="Vacinas disponíveis"
        description="Consulte a agenda disponível e acesse o detalhamento de cada imunizante."
      />

      <AppCard variant="accent" className="gap-2">
        <Text className="text-sm font-semibold text-blue-700">Dica rápida</Text>
        <Text className="text-sm leading-5 text-slate-600">A cor do status ajuda a identificar rapidamente o cenário de cada vacina.</Text>
      </AppCard>

      <FlatList
        data={vaccines}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <VaccineCard
              title={item.name}
              local={item.local}
              date={item.date}
              status={statusMap[item.status as VaccineStatus]}
              onPress={() =>
                navigation.navigate('VaccineDetails', {
                  vaccineName: item.name,
                  vaccineDate: item.date,
                  vaccineLocal: item.local,
                  vaccineStatus: item.status,
                })
              }
            />
          );
        }}
      />
    </ScreenContainer>
  );
}
