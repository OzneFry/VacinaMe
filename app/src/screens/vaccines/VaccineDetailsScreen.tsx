import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AlertTriangle, Clock3, MapPin, Shield, Syringe, CheckCircle2 } from 'lucide-react-native';

import { Button } from '../../components/ui/Button';
import { AppCard } from '../../components/shared/AppCard';
import { ScreenContainer } from '../../components/shared/ScreenContainer';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { StatusBadge } from '../../components/shared/StatusBadge';

export function VaccineDetailsScreen() {
  const route = useRoute<any>();
  const vaccineName = route.params?.vaccineName ?? 'Vacina';
  const vaccineDate = route.params?.vaccineDate ?? 'Data não informada';
  const vaccineLocal = route.params?.vaccineLocal ?? 'Local não informado';
  const vaccineStatus = route.params?.vaccineStatus ?? 'disponível';

  const statusConfig: Record<string, { label: string; badge: 'available' | 'queue' | 'unavailable'; icon: React.ComponentType<{ size?: number; color?: string }> }> = {
    disponível: { label: 'Disponível', badge: 'available', icon: CheckCircle2 },
    fila: { label: 'Em fila', badge: 'queue', icon: Clock3 },
    indisponível: { label: 'Indisponível', badge: 'unavailable', icon: AlertTriangle },
  };

  const status = statusConfig[vaccineStatus] ?? statusConfig.disponível;
  const StatusIcon = status.icon;

  return (
    <ScreenContainer contentClassName="gap-4">
      <AppCard variant="accent" className="gap-4">
        <View className="flex-row items-center gap-3">
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-white">
            <Syringe size={26} color="#2563eb" strokeWidth={2.2} />
          </View>
          <View className="flex-1 gap-1">
            <Text className="text-sm font-semibold text-blue-700">Detalhes da vacina</Text>
            <Text className="text-[28px] font-bold leading-8 text-slate-900">{vaccineName}</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2 rounded-2xl bg-white/80 px-4 py-3">
          <StatusIcon size={16} color="#2563eb" />
          <Text className="text-sm font-semibold text-slate-700">Status em destaque</Text>
        </View>
        <StatusBadge label={status.label} status={status.badge} />
      </AppCard>

      <SectionTitle title="Informações" description="Os dados abaixo ajudam a localizar e acompanhar a aplicação." />

      <View className="gap-3">
        <AppCard className="gap-3">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-2xl bg-blue-50">
              <MapPin size={18} color="#2563eb" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-slate-900">Local</Text>
              <Text className="text-sm text-slate-500">{vaccineLocal}</Text>
            </View>
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
              <Clock3 size={18} color="#16a34a" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-slate-900">Data</Text>
              <Text className="text-sm text-slate-500">{vaccineDate}</Text>
            </View>
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-2xl bg-amber-50">
              <Shield size={18} color="#d97706" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-slate-900">Orientação</Text>
              <Text className="text-sm leading-5 text-slate-500">Confirme a disponibilidade antes de se deslocar até a unidade.</Text>
            </View>
          </View>
        </AppCard>
      </View>

      <Button label="Entrar na fila" className="mt-2" />
    </ScreenContainer>
  );
}
