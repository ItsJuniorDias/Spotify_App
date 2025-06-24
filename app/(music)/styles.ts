import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 24px;
`;

export const Thumbnail = styled(Image)`
  width: 348px;
  height: 400px;
`;

export const ContentText = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerText = styled.View`
  gap: 8px;
`;

export const ContentPlay = styled.View`
  width: 100%;
  height: 64px;
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const IconPlay = styled(Image)`
  width: 64px;
  height: 64px;
`;
