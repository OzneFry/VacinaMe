import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { FlexboxPlaygroundScreen } from './src/screens/FlexboxPlaygroundScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FlexboxPlaygroundScreen />
    </>
  );
}
