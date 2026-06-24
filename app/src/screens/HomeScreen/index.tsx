import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { theme } from '../../theme';

export function HomeScreen() {
  return (
    <ScreenContainer>
      <AppHeader title="VacinaMe" />

      <View style={styles.content}>
        <AppCard style={styles.card}>
          <Text style={styles.title}>Bem-vindo ao início</Text>
          <Text style={styles.description}>
            Esta é a base inicial de layout da aplicação, preparada para evoluir com novas telas e componentes.
          </Text>
          <AppButton title="Exemplo" onPress={() => undefined} />
        </AppCard>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.mutedText,
  },
});
