import { colors } from "@/theme";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 72px;
  background-color: ${colors.primary};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 24px;
  color: ${colors.black};
`;
