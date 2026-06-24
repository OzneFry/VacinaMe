import React from 'react';
import {
  ScrollView,
  StyleSheet,
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
    <View style={[styles.exampleBox, { backgroundColor: color }, style]}>
      <Text style={[styles.boxLabel, textStyle]}>{label}</Text>
    </View>
  );
}

export function FlexboxPlaygroundScreen() {
  return (
    <ScreenContainer contentStyle={styles.screenContent}>
      <AppHeader title="Flexbox Playground" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <AppCard style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Exemplo 1 — Flex Direction Column</Text>
          <Text style={styles.sectionDescription}>
            flexDirection: {'column'} deixa os itens empilhados verticalmente.
          </Text>
          <View style={styles.columnDemo}>
            <ExampleBox label="1" color="#60a5fa" />
            <ExampleBox label="2" color="#34d399" />
            <ExampleBox label="3" color="#f59e0b" />
          </View>
        </AppCard>

        <AppCard style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Exemplo 2 — Flex Direction Row</Text>
          <Text style={styles.sectionDescription}>
            flexDirection: {'row'} organiza os itens lado a lado.
          </Text>
          <View style={styles.rowDemo}>
            <ExampleBox label="1" color="#60a5fa" />
            <ExampleBox label="2" color="#34d399" />
            <ExampleBox label="3" color="#f59e0b" />
          </View>
        </AppCard>

        <AppCard style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Exemplo 3 — Justify Content</Text>
          <Text style={styles.sectionDescription}>
            justifyContent define como o espaço extra é distribuído ao longo do eixo principal.
          </Text>

          <View style={styles.justifyExample}>
            <Text style={styles.demoLabel}>center</Text>
            <View style={[styles.demoRow, styles.justifyCenter]}>
              <ExampleBox label="A" color="#60a5fa" style={styles.smallBox} />
              <ExampleBox label="B" color="#34d399" style={styles.smallBox} />
              <ExampleBox label="C" color="#f59e0b" style={styles.smallBox} />
            </View>
          </View>

          <View style={styles.justifyExample}>
            <Text style={styles.demoLabel}>space-between</Text>
            <View style={[styles.demoRow, styles.justifyBetween]}>
              <ExampleBox label="A" color="#60a5fa" style={styles.smallBox} />
              <ExampleBox label="B" color="#34d399" style={styles.smallBox} />
              <ExampleBox label="C" color="#f59e0b" style={styles.smallBox} />
            </View>
          </View>

          <View style={styles.justifyExample}>
            <Text style={styles.demoLabel}>space-around</Text>
            <View style={[styles.demoRow, styles.justifyAround]}>
              <ExampleBox label="A" color="#60a5fa" style={styles.smallBox} />
              <ExampleBox label="B" color="#34d399" style={styles.smallBox} />
              <ExampleBox label="C" color="#f59e0b" style={styles.smallBox} />
            </View>
          </View>
        </AppCard>

        <AppCard style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Exemplo 4 — Align Items</Text>
          <Text style={styles.sectionDescription}>
            alignItems controla o alinhamento cruzado no container.
          </Text>

          <View style={styles.alignExample}>
            <Text style={styles.demoLabel}>flex-start</Text>
            <View style={[styles.demoColumn, styles.alignStart]}>
              <ExampleBox label="1" color="#60a5fa" style={styles.tallBox} />
              <ExampleBox label="2" color="#34d399" style={styles.mediumBox} />
              <ExampleBox label="3" color="#f59e0b" style={styles.shortBox} />
            </View>
          </View>

          <View style={styles.alignExample}>
            <Text style={styles.demoLabel}>center</Text>
            <View style={[styles.demoColumn, styles.alignCenter]}>
              <ExampleBox label="1" color="#60a5fa" style={styles.tallBox} />
              <ExampleBox label="2" color="#34d399" style={styles.mediumBox} />
              <ExampleBox label="3" color="#f59e0b" style={styles.shortBox} />
            </View>
          </View>

          <View style={styles.alignExample}>
            <Text style={styles.demoLabel}>flex-end</Text>
            <View style={[styles.demoColumn, styles.alignEnd]}>
              <ExampleBox label="1" color="#60a5fa" style={styles.tallBox} />
              <ExampleBox label="2" color="#34d399" style={styles.mediumBox} />
              <ExampleBox label="3" color="#f59e0b" style={styles.shortBox} />
            </View>
          </View>
        </AppCard>

        <AppCard style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Exemplo 5 — Flex Grow</Text>
          <Text style={styles.sectionDescription}>
            flex define quanto espaço um item deve ocupar dentro do container.
          </Text>

          <View style={styles.growDemo}>
            <View style={[styles.growBlock, styles.growOne]}>
              <Text style={styles.growLabel}>flex: 1</Text>
            </View>
            <View style={[styles.growBlock, styles.growTwo]}>
              <Text style={styles.growLabel}>flex: 2</Text>
            </View>
            <View style={[styles.growBlock, styles.growThree]}>
              <Text style={styles.growLabel}>flex: 3</Text>
            </View>
          </View>
        </AppCard>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screenContent: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
    gap: 16,
  },
  sectionCard: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  sectionDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.mutedText,
  },
  exampleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 48,
    minHeight: 48,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  boxLabel: {
    color: '#ffffff',
    fontWeight: '700',
  },
  columnDemo: {
    flexDirection: 'column',
    gap: 10,
  },
  rowDemo: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  justifyExample: {
    gap: 8,
  },
  demoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.mutedText,
  },
  demoRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    minHeight: 72,
    padding: 12,
    backgroundColor: '#f8fafc',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  smallBox: {
    width: 42,
    height: 42,
  },
  alignExample: {
    gap: 8,
  },
  demoColumn: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    minHeight: 120,
    padding: 12,
    backgroundColor: '#f8fafc',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  tallBox: {
    width: 44,
    height: 54,
  },
  mediumBox: {
    width: 44,
    height: 42,
  },
  shortBox: {
    width: 44,
    height: 28,
  },
  growDemo: {
    flexDirection: 'row',
    height: 80,
    gap: 8,
  },
  growBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  growOne: {
    flex: 1,
    backgroundColor: '#60a5fa',
  },
  growTwo: {
    flex: 2,
    backgroundColor: '#34d399',
  },
  growThree: {
    flex: 3,
    backgroundColor: '#f59e0b',
  },
  growLabel: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
