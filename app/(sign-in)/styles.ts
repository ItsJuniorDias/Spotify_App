import { colors } from "@/theme";
import styled from "styled-components/native";

interface DescriptionProps {
  isColor?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 80px;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.Text`
  font-family: "Montserrat-Bold";
  font-size: 24px;
  color: ${colors.white};
`;

export const Description = styled.Text<DescriptionProps>`
  font-family: "Montserrat-Regular";
  font-size: 14px;
  color: ${({ isColor }) => (isColor ? colors.primary : colors.white)};
`;
