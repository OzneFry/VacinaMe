import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../../components/AppCard';
import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { theme } from '../../theme';

type MockItem = {
  id: number;
  nome: string;
  cidade: string;
};

const mockItems: MockItem[] = [
  { id: 1, nome: 'Ana', cidade: 'São Paulo' },
  { id: 2, nome: 'Bruno', cidade: 'Rio de Janeiro' },
  { id: 3, nome: 'Carla', cidade: 'Belo Horizonte' },
  { id: 4, nome: 'Diego', cidade: 'Curitiba' },
  { id: 5, nome: 'Eduarda', cidade: 'Porto Alegre' },
  { id: 6, nome: 'Fernando', cidade: 'Salvador' },
  { id: 7, nome: 'Giovana', cidade: 'Recife' },
  { id: 8, nome: 'Henrique', cidade: 'Fortaleza' },
  { id: 9, nome: 'Isabela', cidade: 'Campinas' },
  { id: 10, nome: 'João', cidade: 'Manaus' },
];

export function FlatListPlaygroundScreen() {
  const renderItem = ({ item }: { item: MockItem }) => (
    <AppCard style={styles.itemCard}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemCity}>{item.cidade}</Text>
    </AppCard>
  );

  return (
    <ScreenContainer contentStyle={styles.screenContent}>
      <AppHeader title="FlatList Playground" />

      <Text style={styles.introText}>
        O FlatList é utilizado para renderizar listas de forma performática no React Native.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Lista principal</Text>

        {/* O prop data informa quais itens serão exibidos na lista. */}
        <FlatList
          data={mockItems}
          // O prop renderItem define como cada item será apresentado na tela.
          renderItem={renderItem}
          // O prop keyExtractor gera uma chave única para cada item da lista.
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Demonstração extra</Text>

        <FlatList
          data={mockItems.slice(0, 5)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.secondaryList}
          contentContainerStyle={styles.secondaryContent}
          ListHeaderComponent={<Text style={styles.helperText}>ListHeaderComponent</Text>}
          ListFooterComponent={<Text style={styles.helperText}>ListFooterComponent</Text>}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
    marginBottom: theme.spacing.sm,
  },
  section: {
    flex: 1,
    minHeight: 220,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
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
  itemCity: {
    fontSize: 14,
    color: theme.colors.mutedText,
  },
  secondaryList: {
    maxHeight: 240,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
  },
  secondaryContent: {
    gap: 8,
  },
  helperText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  separator: {
    height: 8,
  },
});
