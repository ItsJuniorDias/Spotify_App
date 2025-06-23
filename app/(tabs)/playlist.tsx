import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import List from "../(playlist)/components/list/list";

import { Header } from "@/components";

import { Container } from "./styles";

export default function TabTwoScreen() {
  return (
    <Container>
      <Header title="Playlist" onPressSearch={() => {}} />

      <List />
    </Container>
  );
}
