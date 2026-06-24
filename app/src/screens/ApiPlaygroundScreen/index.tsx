import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Platform, StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../../components/AppCard';
import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { theme } from '../../theme';

type Vaccine = {
  id: number;
  nome: string;
  local: string;
  data: string;
};

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
    <ScreenContainer contentStyle={styles.screenContent}>
      <AppHeader title="API Playground" />

      <Text style={styles.introText}>
        Esta tela consome uma API local com fetch, useState e useEffect.
      </Text>

      {loading ? (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.stateText}>Carregando vacinas...</Text>
        </View>
      ) : error ? (
        <View style={styles.stateContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : vaccines.length === 0 ? (
        <View style={styles.stateContainer}>
          <Text style={styles.emptyText}>Nenhuma vacina disponível no momento.</Text>
        </View>
      ) : (
        <FlatList
          data={vaccines}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <AppCard style={styles.itemCard}>
              <Text style={styles.itemName}>{item.nome}</Text>
              <Text style={styles.itemDetail}>Local: {item.local}</Text>
              <Text style={styles.itemDetail}>Data: {item.data}</Text>
            </AppCard>
          )}
        />
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screenContent: {
    flex: 1,
    gap: 12,
  },
  introText: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.mutedText,
  },
  stateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  stateText: {
    fontSize: 15,
    color: theme.colors.mutedText,
  },
  errorText: {
    fontSize: 15,
    color: '#b42318',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: theme.colors.mutedText,
    textAlign: 'center',
  },
  listContent: {
    gap: 10,
    paddingBottom: theme.spacing.md,
  },
  itemCard: {
    gap: 6,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  itemDetail: {
    fontSize: 14,
    color: theme.colors.mutedText,
  },
});
