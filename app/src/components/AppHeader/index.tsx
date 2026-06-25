import React from 'react';
import { Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

type AppHeaderProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export function AppHeader({ title, style, titleStyle }: AppHeaderProps) {
  return (
    <View className="w-full items-start py-2" style={style}>
      <Text className="text-2xl font-bold leading-8 text-slate-900" style={titleStyle}>{title}</Text>
    </View>
  );
}
