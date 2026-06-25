import React from 'react';
import { FlatList, Text, View } from 'react-native';

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
    <AppCard className="gap-1">
      <Text className="text-base font-bold text-slate-800">{item.nome}</Text>
      <Text className="text-sm text-slate-500">{item.cidade}</Text>
    </AppCard>
  );

  return (
    <ScreenContainer contentClassName="gap-4" scrollable={false}>
      <AppHeader title="FlatList Playground" />

      <Text className="text-sm leading-5 text-slate-500">
        O FlatList é utilizado para renderizar listas de forma performática no React Native.
      </Text>

      <View className="flex-1 min-h-[220px] gap-3">
        <Text className="text-base font-bold text-slate-800">1. Lista principal</Text>

        {/* O prop data informa quais itens serão exibidos na lista. */}
        <FlatList
          data={mockItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View className="flex-1 min-h-[220px] gap-3">
        <Text className="text-base font-bold text-slate-800">2. Demonstração extra</Text>

        <FlatList
          data={mockItems.slice(0, 5)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ maxHeight: 240 }}
          contentContainerStyle={{ gap: 8, padding: 12, borderWidth: 1, borderColor: '#dbe7f8', borderRadius: 12, backgroundColor: '#ffffff' }}
          ListHeaderComponent={<Text className="mb-1 text-[13px] font-semibold text-blue-600">ListHeaderComponent</Text>}
          ListFooterComponent={<Text className="mt-1 text-[13px] font-semibold text-blue-600">ListFooterComponent</Text>}
          ItemSeparatorComponent={() => <View className="h-2" />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenContainer>
  );
}
