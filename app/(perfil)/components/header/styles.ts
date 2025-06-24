import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  padding-top: 64;
  align-items: center;
  width: 100%;
  height: 418px;
  background-color: ${colors.gray};
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Avatar = styled(Image)`
  width: 96px;
  height: 96px;
  border-radius: 50px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const ContentText = styled.View`
  align-items: center;
  gap: 4px;
`;

export const ContentFollowers = styled.View`
  width: 244px;
  height: 52px;
  margin-top: 32px;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerFollowers = styled.View`
  width: 64px;
  align-items: center;
`;
