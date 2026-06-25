import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Bell, ChevronRight, Clock3, ListChecks, MapPin, Settings, Shield, Syringe } from 'lucide-react-native';

import { AppCard } from '../../components/shared/AppCard';
import { ScreenContainer } from '../../components/shared/ScreenContainer';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';

type QuickAction = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  action: 'vaccines' | 'queue' | 'settings';
};

const quickActions: QuickAction[] = [
  {
    title: 'Vacinas Disponíveis',
    description: 'Veja doses, locais e datas em um só lugar.',
    icon: Syringe,
    action: 'vaccines',
  },
  {
    title: 'Minha Fila',
    description: 'Acompanhe sua solicitação e os próximos passos.',
    icon: ListChecks,
    action: 'queue',
  },
  {
    title: 'Configurações',
    description: 'Ajuste cidade, notificações e conta.',
    icon: Settings,
    action: 'settings',
  },
];

function QuickAccessCard({ item, onPress }: { item: QuickAction; onPress: () => void }) {
  const Icon = item.icon;

  return (
    <AppCard variant="elevated" className="gap-4">
      <View className="flex-row items-start justify-between gap-3">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
          <Icon size={22} color="#2563eb" strokeWidth={2.2} />
        </View>
        <ChevronRight size={20} color="#94a3b8" />
      </View>
      <View className="gap-1">
        <Text className="text-lg font-bold text-slate-900">{item.title}</Text>
        <Text className="text-sm leading-5 text-slate-500">{item.description}</Text>
      </View>
      <Button label="Acessar" onPress={onPress} className="w-full" />
    </AppCard>
  );
}

export function DashboardScreen() {
  const navigation = useNavigation<any>();
  const { user } = useAuth();
  const userName = user?.name ?? 'Usuário';
  const region = 'Uberlândia - MG';

  const handleAction = (action: QuickAction['action']) => {
    if (action === 'vaccines') {
      navigation.navigate('VaccinesList');
      return;
    }

    const parentNavigation = navigation.getParent?.();

    if (action === 'queue') {
      parentNavigation?.navigate('Queue');
      return;
    }

    parentNavigation?.navigate('Settings');
  };

  return (
    <ScreenContainer contentClassName="gap-4">
      <AppCard variant="accent" className="gap-4">
        <View className="flex-row items-center justify-between gap-3">
          <View className="flex-1 gap-1">
            <Text className="text-sm font-semibold text-blue-700">Olá, {userName}</Text>
            <Text className="text-[30px] font-bold leading-9 text-slate-900">Monitoramento de Vacinas</Text>
            <Text className="text-sm leading-6 text-slate-600">Acompanhe filas, disponibilidade e status com clareza em qualquer tela.</Text>
          </View>
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-white">
            <Shield size={26} color="#2563eb" strokeWidth={2.2} />
          </View>
        </View>

        <View className="flex-row items-center gap-2 rounded-2xl bg-white/80 px-4 py-3">
          <MapPin size={16} color="#2563eb" />
          <Text className="text-sm font-medium text-slate-700">{region}</Text>
        </View>
      </AppCard>

      <SectionTitle
        eyebrow="Acesso rápido"
        title="Escolha o próximo passo"
        description="As ações principais ficam em destaque para reduzir o caminho até a informação."
      />

      <View className="gap-4">
        {quickActions.map((item) => (
          <QuickAccessCard key={item.title} item={item} onPress={() => handleAction(item.action)} />
        ))}
      </View>

      <View className="flex-row flex-wrap gap-3">
        <AppCard className="min-w-[31%] flex-1 gap-2">
          <View className="h-10 w-10 items-center justify-center rounded-2xl bg-blue-50">
            <Syringe size={18} color="#2563eb" />
          </View>
          <Text className="text-xs text-slate-500">Disponíveis</Text>
          <Text className="text-lg font-bold text-slate-900">12</Text>
        </AppCard>

        <AppCard className="min-w-[31%] flex-1 gap-2">
          <View className="h-10 w-10 items-center justify-center rounded-2xl bg-amber-50">
            <Clock3 size={18} color="#d97706" />
          </View>
          <Text className="text-xs text-slate-500">Em fila</Text>
          <Text className="text-lg font-bold text-slate-900">3</Text>
        </AppCard>

        <AppCard className="min-w-[31%] flex-1 gap-2">
          <View className="h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
            <Bell size={18} color="#16a34a" />
          </View>
          <Text className="text-xs text-slate-500">Notificações</Text>
          <Text className="text-lg font-bold text-slate-900">5</Text>
        </AppCard>
      </View>
    </ScreenContainer>
  );
}
