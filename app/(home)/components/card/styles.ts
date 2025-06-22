import { colors } from "@/theme";
import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 40px;
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  height: 128px;
  background-color: ${colors.yellow};
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 28px;
  padding-right: 28px;
`;

export const ContentText = styled.View`
  gap: 8px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 14px;
  color: ${colors.white};
`;

export const Name = styled.Text`
  font-family: "Montserrat-Bold";
  font-size: 24px;
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 16px;
  color: ${colors.white};
`;

export const Avatar = styled(Image)`
  width: 144px;
  height: 152px;
  margin-top: -24px;
`;
