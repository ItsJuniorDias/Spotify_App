import { colors } from "@/theme";
import styled from "styled-components/native";

interface DescriptionProps {
  color?: string;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;

export const ContentText = styled.View`
  align-items: center;
  gap: 16px;
`;

export const Body = styled.View`
  margin-top: 80px;
  justify-content: center;
  gap: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  font-family: "Montserrat-Bold";
  font-size: 24px;
  color: ${colors.white};
`;

export const Description = styled.Text<DescriptionProps>`
  font-family: "Montserrat-Regular";
  font-size: 14px;
  color: ${({ color }) => color};
  margin-bottom: 16px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 100%;

  align-items: center;
  margin-top: 32px;
`;
