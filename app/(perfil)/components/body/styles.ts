import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 24px;
`;

export const Content = styled.View`
  width: 252px;
  height: 72px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  gap: 4px;
`;
