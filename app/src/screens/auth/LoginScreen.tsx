import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
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
    <View style={styles.container}>
      <Card variant="elevated" style={styles.card}>
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>💉</Text>
        </View>

        <Text style={styles.title}>Acesse o sistema de vacinas</Text>
        <Text style={styles.subtitle}>Entre para entrar na navegação principal do aplicativo.</Text>

        <View style={styles.playgroundSection}>
          <Text style={styles.playgroundTitle}>API Playground</Text>
          <Text style={styles.playgroundDescription}>
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
            <View style={styles.listContainer}>
              {vaccines.map((item) => (
                <View key={item.id} style={styles.itemCard}>
                  <Text style={styles.itemName}>{item.nome}</Text>
                  <Text style={styles.itemDetail}>Local: {item.local}</Text>
                  <Text style={styles.itemDetail}>Data: {item.data}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <Button label="Entrar" onPress={signIn} style={styles.button} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.background,
  },
  card: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: theme.colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  icon: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.mutedText,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
    lineHeight: 22,
  },
  playgroundSection: {
    width: '100%',
    marginBottom: theme.spacing.lg,
  },
  playgroundTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  playgroundDescription: {
    fontSize: 14,
    color: theme.colors.mutedText,
    marginBottom: theme.spacing.md,
    lineHeight: 20,
  },
  stateContainer: {
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateText: {
    fontSize: 14,
    color: theme.colors.mutedText,
    marginTop: theme.spacing.sm,
  },
  errorText: {
    color: theme.colors.danger,
    textAlign: 'center',
  },
  emptyText: {
    color: theme.colors.mutedText,
    textAlign: 'center',
  },
  listContainer: {
    gap: theme.spacing.sm,
  },
  itemCard: {
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
  },
  itemName: {
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 2,
  },
  itemDetail: {
    color: theme.colors.mutedText,
    fontSize: 13,
  },
  button: {
    width: '100%',
  },
});
