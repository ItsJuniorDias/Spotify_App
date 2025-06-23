import { colors } from "@/theme";
import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  padding-left: 24px;
  margin-top: 32px;
  margin-bottom: 96px;
`;

export const Title = styled.Text`
  font-family: "Montserrat-Bold";
  font-size: 24px;
  color: ${colors.white};
`;

export const ContentThumbnail = styled.View`
  flex-direction: row;
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  margin-top: 12px;
  align-items: center;
  padding-right: 24px;
  justify-content: space-between;
`;

export const ContentText = styled.View`
  justify-content: center;
  margin-left: 16px;
  gap: 4px;
`;

export const Thumbnail = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 18px;
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 12px;
  color: ${colors.white};
`;
