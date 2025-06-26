import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: 24px;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-family: "Montserrat-Bold";
  font-size: 24px;
  color: ${colors.white};
`;

export const Content = styled.TouchableOpacity`
  width: 128px;
  height: 170px;
  margin-left: 24px;
  margin-right: -8px;
  margin-top: 12px;
`;

export const Skeleton = styled.View`
  width: 128px;
  height: 128px;
  margin-left: 24px;
  margin-right: -8px;
  margin-top: 12px;
  background-color: ${colors.gray};
  border-radius: 16px;
`;

export const Thumbnail = styled(Image)`
  width: 128px;
  height: 128px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: "Montserrat-SemiBold";
  font-size: 14px;
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 12px;
  color: ${colors.white};
`;
