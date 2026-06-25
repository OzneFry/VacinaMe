import React from 'react';
import { ScrollView, View, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenContainerProps {
  children: React.ReactNode;
  contentClassName?: string;
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
}

export function ScreenContainer({ children, contentClassName, style, scrollable = true }: ScreenContainerProps) {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-slate-50" style={style}>
      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerClassName={`flex-grow px-4 py-4 ${contentClassName ?? ''}`}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        <View className={`flex-1 px-4 py-4 ${contentClassName ?? ''}`}>{children}</View>
      )}
    </SafeAreaView>
  );
}