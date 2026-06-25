import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Platform, Text, View } from 'react-native';

import { AppCard } from '../../components/AppCard';
import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { theme } from '../../theme';
import { type Vaccine } from '../../types/vaccine';

const API_URL = Platform.OS === 'web' ? 'http://127.0.0.1:3000/vaccines' : 'http://10.0.2.2:3000/vaccines';

export function ApiPlaygroundScreen() {
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
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

        const normalizedVaccines = data as Vaccine[];
        setVaccines(normalizedVaccines);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro inesperado.');
      } finally {
        setLoading(false);
      }
    }

    loadVaccines();
  }, []);

  return (
    <ScreenContainer contentClassName="gap-4" scrollable={false}>
      <AppHeader title="API Playground" />

      <Text className="text-sm leading-5 text-slate-500">
        Esta tela consome uma API local com fetch, useState e useEffect.
      </Text>

      {loading ? (
        <View className="flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6">
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text className="mt-2 text-[15px] text-slate-500">Carregando vacinas...</Text>
        </View>
      ) : error ? (
        <View className="flex-1 items-center justify-center rounded-2xl border border-red-100 bg-red-50 p-6">
          <Text className="text-center text-[15px] text-red-700">{error}</Text>
        </View>
      ) : vaccines.length === 0 ? (
        <View className="flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6">
          <Text className="text-center text-[15px] text-slate-500">Nenhuma vacina disponível no momento.</Text>
        </View>
      ) : (
        <FlatList
          data={vaccines}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <AppCard className="gap-1">
              <Text className="text-base font-bold text-slate-800">{item.nome}</Text>
              <Text className="text-sm text-slate-500">Local: {item.local}</Text>
              <Text className="text-sm text-slate-500">Data: {item.data}</Text>
            </AppCard>
          )}
        />
      )}
    </ScreenContainer>
  );
}
