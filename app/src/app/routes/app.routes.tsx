import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { QueueScreen } from '../../screens/queue/QueueScreen';
import { RegionSettingsScreen } from '../../screens/settings/RegionSettingsScreen';
import { VaccineDetailsScreen } from '../../screens/vaccines/VaccineDetailsScreen';
import { VaccinesListScreen } from '../../screens/vaccines/VaccinesListScreen';

export type VaccinesStackParamList = {
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
    <VaccinesStack.Navigator>
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
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#2563eb' }}>
      <Tab.Screen name="Vaccines" component={VaccinesStackNavigator} options={{ title: 'Vacinas' }} />
      <Tab.Screen name="Queue" component={QueueScreen} options={{ title: 'Fila' }} />
      <Tab.Screen name="Settings" component={RegionSettingsScreen} options={{ title: 'Configurações' }} />
    </Tab.Navigator>
  );
}
