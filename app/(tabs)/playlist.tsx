import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { Header } from "@/components";

import { Container } from "./styles";

export default function TabTwoScreen() {
  return (
    <Container>
      <Header title="Playlist" onPressSearch={() => {}} />
    </Container>
  );
}
