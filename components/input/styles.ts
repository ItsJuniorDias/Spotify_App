import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

interface InputProps {
  isError: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  height: 72px;
  border-color: ${({ isError }) => (isError ? colors.error : colors.gray)};
  border-width: 2px;
  border-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 72px;
  font-family: "Montserrat-SemiBold";
  color: ${colors.white};
`;

export const Icon = styled(Image)`
  width: 28px;
  height: 24px;
`;

export const ErrorMessage = styled.Text`
  font-family: "Montserrat-Medium";
  font-size: 14px;
  color: ${colors.error};
  margin-top: -8px;
`;
