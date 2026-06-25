import React from 'react';
import {
  ScrollView,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { AppCard } from '../../components/AppCard';
import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { theme } from '../../theme';

type ExampleBoxProps = {
  label: string;
  color: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

function ExampleBox({ label, color, style, textStyle }: ExampleBoxProps) {
  return (
    <View className="min-h-12 min-w-12 items-center justify-center rounded-[10px] px-3" style={[{ backgroundColor: color }, style]}>
      <Text className="font-bold text-white" style={textStyle}>{label}</Text>
    </View>
  );
}

export function FlexboxPlaygroundScreen() {
  return (
    <ScreenContainer contentClassName="gap-4" scrollable={false}>
      <AppHeader title="Flexbox Playground" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24, gap: 16 }}>
        <AppCard className="gap-3">
          <Text className="text-lg font-bold text-slate-800">Exemplo 1 — Flex Direction Column</Text>
          <Text className="text-sm leading-5 text-slate-500">
            flexDirection: {'column'} deixa os itens empilhados verticalmente.
          </Text>
          <View className="gap-2">
            <ExampleBox label="1" color="#60a5fa" />
            <ExampleBox label="2" color="#34d399" />
            <ExampleBox label="3" color="#f59e0b" />
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <Text className="text-lg font-bold text-slate-800">Exemplo 2 — Flex Direction Row</Text>
          <Text className="text-sm leading-5 text-slate-500">
            flexDirection: {'row'} organiza os itens lado a lado.
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <ExampleBox label="1" color="#60a5fa" />
            <ExampleBox label="2" color="#34d399" />
            <ExampleBox label="3" color="#f59e0b" />
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <Text className="text-lg font-bold text-slate-800">Exemplo 3 — Justify Content</Text>
          <Text className="text-sm leading-5 text-slate-500">
            justifyContent define como o espaço extra é distribuído ao longo do eixo principal.
          </Text>

          <View className="gap-2">
            <Text className="text-xs font-semibold text-slate-500">center</Text>
            <View className="min-h-[72px] flex-row justify-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 p-3">
              <ExampleBox label="A" color="#60a5fa" style={{ width: 42, height: 42 }} />
              <ExampleBox label="B" color="#34d399" style={{ width: 42, height: 42 }} />
              <ExampleBox label="C" color="#f59e0b" style={{ width: 42, height: 42 }} />
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-xs font-semibold text-slate-500">space-between</Text>
            <View className="min-h-[72px] flex-row justify-between rounded-[10px] border border-slate-200 bg-slate-50 p-3">
              <ExampleBox label="A" color="#60a5fa" style={{ width: 42, height: 42 }} />
              <ExampleBox label="B" color="#34d399" style={{ width: 42, height: 42 }} />
              <ExampleBox label="C" color="#f59e0b" style={{ width: 42, height: 42 }} />
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-xs font-semibold text-slate-500">space-around</Text>
            <View className="min-h-[72px] flex-row justify-around rounded-[10px] border border-slate-200 bg-slate-50 p-3">
              <ExampleBox label="A" color="#60a5fa" style={{ width: 42, height: 42 }} />
              <ExampleBox label="B" color="#34d399" style={{ width: 42, height: 42 }} />
              <ExampleBox label="C" color="#f59e0b" style={{ width: 42, height: 42 }} />
            </View>
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <Text className="text-lg font-bold text-slate-800">Exemplo 4 — Align Items</Text>
          <Text className="text-sm leading-5 text-slate-500">
            alignItems controla o alinhamento cruzado no container.
          </Text>

          <View className="gap-2">
            <Text className="text-xs font-semibold text-slate-500">flex-start</Text>
            <View className="min-h-[120px] items-start gap-2 rounded-[10px] border border-slate-200 bg-slate-50 p-3">
              <ExampleBox label="1" color="#60a5fa" style={{ width: 44, height: 54 }} />
              <ExampleBox label="2" color="#34d399" style={{ width: 44, height: 42 }} />
              <ExampleBox label="3" color="#f59e0b" style={{ width: 44, height: 28 }} />
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-xs font-semibold text-slate-500">center</Text>
            <View className="min-h-[120px] items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 p-3">
              <ExampleBox label="1" color="#60a5fa" style={{ width: 44, height: 54 }} />
              <ExampleBox label="2" color="#34d399" style={{ width: 44, height: 42 }} />
              <ExampleBox label="3" color="#f59e0b" style={{ width: 44, height: 28 }} />
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-xs font-semibold text-slate-500">flex-end</Text>
            <View className="min-h-[120px] items-end gap-2 rounded-[10px] border border-slate-200 bg-slate-50 p-3">
              <ExampleBox label="1" color="#60a5fa" style={{ width: 44, height: 54 }} />
              <ExampleBox label="2" color="#34d399" style={{ width: 44, height: 42 }} />
              <ExampleBox label="3" color="#f59e0b" style={{ width: 44, height: 28 }} />
            </View>
          </View>
        </AppCard>

        <AppCard className="gap-3">
          <Text className="text-lg font-bold text-slate-800">Exemplo 5 — Flex Grow</Text>
          <Text className="text-sm leading-5 text-slate-500">
            flex define quanto espaço um item deve ocupar dentro do container.
          </Text>

          <View className="h-20 flex-row gap-2">
            <View className="flex flex-1 items-center justify-center rounded-[10px] bg-blue-400">
              <Text className="font-bold text-white">flex: 1</Text>
            </View>
            <View className="flex flex-[2] items-center justify-center rounded-[10px] bg-emerald-400">
              <Text className="font-bold text-white">flex: 2</Text>
            </View>
            <View className="flex flex-[3] items-center justify-center rounded-[10px] bg-amber-500">
              <Text className="font-bold text-white">flex: 3</Text>
            </View>
          </View>
        </AppCard>
      </ScrollView>
    </ScreenContainer>
  );
}
