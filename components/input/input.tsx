import { useState } from "react";
import { Container, Input, ErrorMessage } from "./styles";
import { colors } from "@/theme";
import { View } from "react-native";

interface ButtonProps {
  placeholder: string;
  value: string;
  onChangeText: (item: string) => void;
  onFocus: () => void;
  secureTextEntry?: boolean;
  isError: boolean;
}

export function InputComponent({
  onChangeText,
  placeholder,
  value,
  secureTextEntry,
  onFocus,
  isError,
}: ButtonProps) {
  return (
    <Container>
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onFocus={onFocus}
        placeholderTextColor={colors.white}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        isError={isError}
      />

      {isError && <ErrorMessage>* Campo obrigatório</ErrorMessage>}
    </Container>
  );
}
