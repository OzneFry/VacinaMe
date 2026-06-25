import './global.css';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { AppNavigator } from './src/app/AppNavigator';
import { AuthProvider } from './src/app/providers';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </AuthProvider>
  );
}
