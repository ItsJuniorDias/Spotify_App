import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
`;

export const Title = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 24px;
  color: ${colors.white};
  margin-top: 24px;
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;

  margin-top: 16px;
`;

export const Avatar = styled(Image)`
  width: 80px;
  height: 80px;
`;

export const ContentText = styled.View`
  gap: 4px;
  margin-left: 16px;
  justify-content: center;
`;

export const Name = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 18px;
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: ${colors.white};
`;
