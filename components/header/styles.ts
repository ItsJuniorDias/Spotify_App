import { Image } from "expo-image";
import styled from "styled-components/native";

export const ContentLogo = styled.View`
  padding-top: 64px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ImageLogo = styled(Image)`
  width: 133px;
  height: 40px;
`;

export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border: 2px solid #333333;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const FakeView = styled.View`
  width: 32px;
  height: 32px;
`;
