import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import Header from "../(perfil)/components/header/header";
import Body from "../(perfil)/components/body/body";
import List from "../(perfil)/components/list/list";

import { Container } from "./styles";

export default function PerfilScreen() {
  return (
    <Container>
      <Header title="History" />
      <Body />
      <List />
    </Container>
  );
}
