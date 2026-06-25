import React from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

export function Input(props: InputProps) {
  const { style, className, leftIcon, rightIcon, containerClassName, onFocus, onBlur, ...rest } = props;
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus: TextInputProps['onFocus'] = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur: TextInputProps['onBlur'] = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <View
      className={`min-h-12 flex-row items-center gap-3 rounded-xl border bg-white px-4 ${
        isFocused ? 'border-blue-500' : 'border-slate-300'
      } ${containerClassName ?? ''}`}
    >
      {leftIcon}
      <TextInput
        {...rest}
        className={`flex-1 py-3 text-[15px] text-slate-800 ${className ?? ''}`}
        placeholderTextColor="#64748b"
        style={style}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {rightIcon}
    </View>
  );
}
