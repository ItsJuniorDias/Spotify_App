import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "@/theme";

import icon_hide from "../../assets/images/icon_hide.png";

import { Container, Input, ErrorMessage, Icon } from "./styles";

interface InputProps {
  testID?: string;
  placeholder: string;
  value: string;
  onChangeText: (item: string) => void;
  onFocus: () => void;
  isButtonHide?: boolean;
  secureTextEntry?: boolean;
  setSecureTextEntry?: (item: boolean) => void;
  isError: boolean;
}

export function InputComponent({
  testID,
  onChangeText,
  placeholder,
  value,
  isButtonHide,
  secureTextEntry,
  setSecureTextEntry,
  onFocus,
  isError,
}: InputProps) {
  return (
    <>
      <Container testID="container_input_testID" isError={isError}>
        <Input
          testID={testID}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          onFocus={onFocus}
          placeholderTextColor={colors.white}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
        />

        {isButtonHide && (
          <TouchableOpacity
            testID="button_input_testID"
            onPress={() => setSecureTextEntry((prevState) => !prevState)}
          >
            <Icon source={icon_hide} />
          </TouchableOpacity>
        )}
      </Container>

      {isError && (
        <ErrorMessage testID="error_testID">* Campo obrigatório</ErrorMessage>
      )}
    </>
  );
}
