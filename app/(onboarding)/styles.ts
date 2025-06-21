import { colors } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;

export const ContentBody = styled.View`
  width: 100%;
  margin-top: 32px;
  align-items: center;
  justify-content: center;
`;

export const ImageBody = styled.Image`
  width: 100%;
  height: 512px;
`;

export const Footer = styled.View`
  width: 100%;
  padding-left: 42px;
  padding-right: 42px;
  align-items: center;
  gap: 16px;
  margin-top: -16px;
  padding-bottom: 64px;

  z-index: 2;
`;

export const Title = styled.Text`
  font-family: "Montserrat-Bold";
  font-size: 24px;
  color: ${colors.primary};
`;

export const Description = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 14px;
  color: ${colors.white};
  text-align: center;
`;
