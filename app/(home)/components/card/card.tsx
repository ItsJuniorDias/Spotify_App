import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import avatar from "../../../../assets/images/avatar.png";

import {
  Container,
  Content,
  Avatar,
  ContentText,
  Title,
  Name,
  Description,
} from "./styles";

export default function Card() {
  return (
    <Container>
      <Content activeOpacity={0.7}>
        <ContentText>
          <Title>Popular</Title>

          <Name>Sisa Rasa</Name>

          <Description>Popular</Description>
        </ContentText>

        <Avatar source={avatar} />
      </Content>
    </Container>
  );
}
