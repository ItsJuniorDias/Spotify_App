import { colors } from "@/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;

export const Header = styled.View`
  width: 100%;
  height: 280px;
  /* background-color: red; */
`;

export const Thumbnail = styled(Image)`
  width: 100%;
  height: 280px;
  position: absolute;
  z-index: 1;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const ContentButton = styled.View`
  padding-top: 64px;
  padding-left: 32px;
  position: absolute;
  z-index: 2;
`;

export const ContentText = styled.View`
  padding-left: 32px;
  margin-top: -64px;
  z-index: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border: 2px solid #333333;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const ContentFollowers = styled.View`
  width: 100%;
  height: 52px;

  flex-direction: row;
  justify-content: space-between;
  margin-top: 64px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const ContainerFollowers = styled.View`
  width: 132px;
  gap: 4px;
  align-items: center;
`;

export const ContentItem = styled.View`
  margin-top: 12px;
  align-items: center;
  gap: 8px;
  padding-left: 32px;
`;

export const Avatar = styled(Image)`
  width: 128px;
  height: 128px;
  border-radius: 16px;
`;

export const ContainerText = styled.View`
  align-items: center;
`;

export const ContentTitle = styled.View`
  margin-top: 24px;
  padding-left: 32px;
`;

export const ContentSongs = styled.TouchableOpacity`
  padding-left: 32px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const IconList = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  margin-top: 16px;
`;
