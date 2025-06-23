import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-left: 24px;
  padding-right: 24px;
  margin-bottom: 96px;
`;

export const Content = styled.TouchableOpacity`
  margin-right: 24px;
  margin-top: 32px;
  gap: 4px;
`;

export const Thumbnail = styled(Image)`
  width: 166px;
  height: 166px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 16px;
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 14px;
  color: ${colors.white};
`;
