import React from 'react';
import { Text, View } from 'react-native';

import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { theme } from '../../theme';

export function HomeScreen() {
  return (
    <ScreenContainer contentClassName="gap-4">
      <AppHeader title="VacinaMe" />

      <View className="flex-1 justify-center">
        <AppCard className="items-start gap-3">
          <Text className="text-xl font-bold text-slate-800">Bem-vindo ao início</Text>
          <Text className="text-[15px] leading-6 text-slate-500">
            Esta é a base inicial de layout da aplicação, preparada para evoluir com novas telas e componentes.
          </Text>
          <AppButton title="Exemplo" onPress={() => undefined} />
        </AppCard>
      </View>
    </ScreenContainer>
  );
}
