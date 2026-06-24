import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ApiPlaygroundScreen } from './src/screens/ApiPlaygroundScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ApiPlaygroundScreen />
    </>
  );
}
