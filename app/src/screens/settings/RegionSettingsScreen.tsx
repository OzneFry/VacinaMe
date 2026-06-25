import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Bell, MapPin, Settings, User } from 'lucide-react-native';

import { AppCard } from '../../components/shared/AppCard';
import { ScreenContainer } from '../../components/shared/ScreenContainer';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { useAuth } from '../../hooks/useAuth';

const cityOptions = ['Uberlândia - MG', 'Belo Horizonte - MG', 'São Paulo - SP'] as const;

export function RegionSettingsScreen() {
  const { user } = useAuth();
  const [selectedCity, setSelectedCity] = React.useState<(typeof cityOptions)[number]>('Uberlândia - MG');

  return (
    <ScreenContainer contentClassName="gap-4">
      <SectionTitle
        eyebrow="Configurações"
        title="Preferências da conta"
        description="Ajustes visuais e de contexto para deixar o app mais próximo de uma plataforma oficial de saúde."
      />

      <AppCard variant="accent" className="gap-3">
        <View className="flex-row items-center gap-3">
          <View className="h-11 w-11 items-center justify-center rounded-2xl bg-white">
            <MapPin size={18} color="#2563eb" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-blue-700">Cidade selecionada</Text>
            <Text className="text-sm text-slate-600">Escolha a localidade para ajustar a exibição das informações.</Text>
          </View>
        </View>

        <View className="gap-2 pt-1">
          {cityOptions.map((city) => {
            const isSelected = selectedCity === city;

            return (
              <Pressable
                key={city}
                onPress={() => setSelectedCity(city)}
                accessibilityRole="button"
                style={({ pressed }) => (pressed ? { opacity: 0.95, transform: [{ scale: 0.995 }] } : null)}
                className={`flex-row items-center justify-between rounded-2xl border px-4 py-4 ${
                  isSelected ? 'border-blue-200 bg-white' : 'border-slate-200 bg-slate-50'
                }`}
              >
                <View className="flex-1 gap-0.5">
                  <Text className="text-sm font-semibold text-slate-900">{city}</Text>
                  <Text className="text-xs text-slate-500">Unidade de referência principal</Text>
                </View>
                {isSelected ? <StatusBadge label="Ativa" status="info" /> : null}
              </Pressable>
            );
          })}
        </View>
      </AppCard>

      <View className="gap-3">
        <AppCard className="gap-3">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-2xl bg-amber-50">
              <Bell size={18} color="#d97706" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-slate-900">Notificações</Text>
              <Text className="text-sm text-slate-500">Avisos de fila, atualização de status e lembretes de dose.</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <Text className="text-sm text-slate-600">Notificações ativas</Text>
            <StatusBadge label="Ligadas" status="success" />
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-2xl bg-blue-50">
              <User size={18} color="#2563eb" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-slate-900">Conta</Text>
              <Text className="text-sm text-slate-500">{user?.name ?? 'Usuário'} • {user?.email ?? 'user@example.com'}</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <Text className="text-sm text-slate-600">Perfil institucional</Text>
            <StatusBadge label="Padrão" status="neutral" />
          </View>
        </AppCard>
      </View>

      <AppCard className="gap-2">
        <View className="flex-row items-center gap-2">
          <Settings size={18} color="#2563eb" />
          <Text className="text-sm font-semibold text-slate-900">Ajustes visuais</Text>
        </View>
        <Text className="text-sm leading-5 text-slate-500">Os componentes seguem um padrão de cartões brancos, azul institucional e boa legibilidade.</Text>
      </AppCard>
    </ScreenContainer>
  );
}
