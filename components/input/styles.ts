import { colors } from "@/theme";
import styled from "styled-components/native";

interface InputProps {
  isError: boolean;
}

export const Container = styled.View`
  gap: 8px;
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: 72px;
  border-color: ${({ isError }) => (isError ? colors.error : colors.gray)};
  border-width: 2px;
  font-family: "Montserrat-SemiBold";
  color: ${colors.white};
  border-radius: 24px;
  padding: 24px;
`;

export const ErrorMessage = styled.Text`
  font-family: "Montserrat-Medium";
  font-size: 14px;
  color: ${colors.error};
`;
