import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Clock3, ListChecks, Settings, Syringe } from 'lucide-react-native';

import { DashboardScreen } from '../../screens/dashboard/DashboardScreen';
import { QueueScreen } from '../../screens/queue/QueueScreen';
import { RegionSettingsScreen } from '../../screens/settings/RegionSettingsScreen';
import { VaccineDetailsScreen } from '../../screens/vaccines/VaccineDetailsScreen';
import { VaccinesListScreen } from '../../screens/vaccines/VaccinesListScreen';

export type VaccinesStackParamList = {
  Dashboard: undefined;
  VaccinesList: undefined;
  VaccineDetails: {
    vaccineName: string;
    vaccineDate?: string;
    vaccineLocal?: string;
  };
};

export type AppTabParamList = {
  Vaccines: undefined;
  Queue: undefined;
  Settings: undefined;
};

const VaccinesStack = createNativeStackNavigator<VaccinesStackParamList>();
const Tab = createBottomTabNavigator<AppTabParamList>();

function VaccinesStackNavigator() {
  return (
    <VaccinesStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
      <VaccinesStack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Início' }} />
      <VaccinesStack.Screen name="VaccinesList" component={VaccinesListScreen} options={{ title: 'Vacinas' }} />
      <VaccinesStack.Screen
        name="VaccineDetails"
        component={VaccineDetailsScreen}
        options={{ title: 'Detalhes da vacina' }}
      />
    </VaccinesStack.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#cbd5e1',
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 10,
          paddingHorizontal: 12,
          height: 76,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarItemStyle: {
          borderRadius: 12,
          marginHorizontal: 4,
          paddingTop: 2,
        },
        tabBarActiveBackgroundColor: '#eff6ff',
      }}
    >
      <Tab.Screen
        name="Vaccines"
        component={VaccinesStackNavigator}
        options={{
          title: 'Vacinas',
          tabBarIcon: ({ color }) => <Syringe color={color} size={22} strokeWidth={2.2} />,
        }}
      />
      <Tab.Screen
        name="Queue"
        component={QueueScreen}
        options={{
          title: 'Fila',
          tabBarIcon: ({ color }) => <ListChecks color={color} size={22} strokeWidth={2.2} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={RegionSettingsScreen}
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <Settings color={color} size={22} strokeWidth={2.2} />,
        }}
      />
    </Tab.Navigator>
  );
}
