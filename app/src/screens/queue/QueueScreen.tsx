import React from 'react';
import { Text, View } from 'react-native';
import { CircleCheck, Clock3, Syringe } from 'lucide-react-native';

import { AppCard } from '../../components/shared/AppCard';
import { ScreenContainer } from '../../components/shared/ScreenContainer';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { StatusBadge } from '../../components/shared/StatusBadge';

const queueItems = [
  { vaccine: 'Pfizer', entryDate: '02/07/2025', status: 'Em análise' },
  { vaccine: 'Coronavac', entryDate: '03/07/2025', status: 'Próximo' },
  { vaccine: 'Hepatite B', entryDate: '05/07/2025', status: 'Aguardando liberação' },
];

export function QueueScreen() {
  return (
    <ScreenContainer contentClassName="gap-4">
      <SectionTitle
        eyebrow="Fila"
        title="Acompanhamento da solicitação"
        description="Visual semelhante ao status de um processo, com etapas organizadas e leitura rápida."
      />

      <AppCard variant="accent" className="gap-3">
        <View className="flex-row items-center gap-3">
          <View className="h-11 w-11 items-center justify-center rounded-2xl bg-white">
            <Clock3 size={20} color="#2563eb" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-blue-700">Status atual</Text>
            <Text className="text-sm text-slate-600">Sua posição na fila é atualizada com foco em clareza e acessibilidade.</Text>
          </View>
        </View>
      </AppCard>

      <View className="gap-3">
        {queueItems.map((item, index) => {
          const isLast = index === queueItems.length - 1;

          return (
            <View key={item.vaccine} className="flex-row items-stretch gap-3">
              <View className="items-center pt-1">
                <View className="h-3.5 w-3.5 rounded-full bg-blue-600" />
                {isLast ? null : <View className="mt-1 flex-1 w-0.5 bg-slate-200" />}
              </View>

              <AppCard variant="elevated" className="flex-1 gap-3">
                <View className="flex-row items-start justify-between gap-3">
                  <View className="flex-1 gap-1">
                    <Text className="text-base font-bold text-slate-900">{item.vaccine}</Text>
                    <Text className="text-sm text-slate-500">Data de entrada: {item.entryDate}</Text>
                  </View>
                  <StatusBadge
                    label={item.status}
                    status={index === 0 ? 'warning' : index === 1 ? 'info' : 'neutral'}
                  />
                </View>

                <View className="flex-row items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                  <Syringe size={16} color="#2563eb" />
                  <Text className="text-sm text-slate-600">Etapa #{index + 1} do acompanhamento</Text>
                </View>
              </AppCard>
            </View>
          );
        })}
      </View>

      <AppCard className="gap-2">
        <View className="flex-row items-center gap-2">
          <CircleCheck size={18} color="#16a34a" />
          <Text className="text-sm font-semibold text-slate-900">Acesso monitorado</Text>
        </View>
        <Text className="text-sm leading-5 text-slate-500">O fluxo mantém a leitura visual limpa para consultas rápidas em celular.</Text>
      </AppCard>
    </ScreenContainer>
  );
}
