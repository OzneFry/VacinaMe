import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import { Bell, Shield, Syringe } from 'lucide-react-native';

import { AppCard } from '../../components/shared/AppCard';
import { ScreenContainer } from '../../components/shared/ScreenContainer';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { theme } from '../../theme';

interface VaccineItem {
  id: number;
  nome: string;
  local: string;
  data: string;
}

const API_URL = Platform.OS === 'web' ? 'http://127.0.0.1:3000/vaccines' : 'http://10.0.2.2:3000/vaccines';

export function LoginScreen() {
  const { signIn } = useAuth();
  const [vaccines, setVaccines] = useState<VaccineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVaccines() {
      const startedAt = Date.now();

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Não foi possível carregar os dados da API.');
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('A resposta da API não possui o formato esperado.');
        }

        const elapsed = Date.now() - startedAt;
        const minimumLoadingTime = 700;

        if (elapsed < minimumLoadingTime) {
          await new Promise((resolve) => setTimeout(resolve, minimumLoadingTime - elapsed));
        }

        setVaccines(data as VaccineItem[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro inesperado.');
      } finally {
        setLoading(false);
      }
    }

    loadVaccines();
  }, []);

  return (
    <ScreenContainer contentClassName="justify-center">
      <AppCard variant="elevated" className="items-center gap-6 py-8">
        <View className="w-full items-center gap-3 rounded-2xl bg-blue-50 px-4 py-6">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-white">
            <Shield size={28} color="#2563eb" />
          </View>
          <Text className="text-center text-2xl font-bold text-slate-900">Acesse o sistema de vacinas</Text>
          <Text className="text-center text-base leading-6 text-slate-600">
            Entre para entrar na navegação principal do aplicativo.
          </Text>
        </View>

        <View className="w-full gap-4">
          <View className="flex-row items-center gap-2">
            <Syringe size={18} color="#2563eb" />
            <Text className="text-lg font-bold text-slate-900">API Playground</Text>
          </View>
          <Text className="text-sm leading-5 text-slate-500">
            Esta tela consome uma API local com fetch, useState e useEffect.
          </Text>

          {loading ? (
            <View className="min-h-20 items-center justify-center rounded-2xl bg-slate-50 p-4">
              <ActivityIndicator size="large" color={theme.colors.primary} />
              <Text className="mt-2 text-sm text-slate-500">Carregando vacinas...</Text>
            </View>
          ) : error ? (
            <View className="min-h-20 items-center justify-center rounded-2xl bg-red-50 px-4 py-5">
              <Text className="text-center text-sm text-red-600">{error}</Text>
            </View>
          ) : vaccines.length === 0 ? (
            <View className="min-h-20 items-center justify-center rounded-2xl bg-slate-50 px-4 py-5">
              <Text className="text-center text-sm text-slate-500">Nenhuma vacina disponível no momento.</Text>
            </View>
          ) : (
            <View className="gap-2 rounded-2xl bg-slate-50 p-3">
              {vaccines.map((item) => (
                <View key={item.id} className="rounded-2xl bg-white p-3">
                  <Text className="mb-0.5 font-bold text-slate-900">{item.nome}</Text>
                  <Text className="text-sm text-slate-500">Local: {item.local}</Text>
                  <Text className="text-sm text-slate-500">Data: {item.data}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <View className="w-full flex-row items-center gap-2 rounded-2xl bg-blue-50 px-4 py-3">
          <Bell size={16} color="#2563eb" />
          <Text className="flex-1 text-sm leading-5 text-slate-600">Ambiente preparado para acesso seguro e leitura rápida em mobile.</Text>
        </View>

        <Button label="Entrar" onPress={signIn} className="w-full" />
      </AppCard>
    </ScreenContainer>
  );
}
