import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { Container } from "./styles";
import { Header } from "@/components";

export default function HomeScreen() {
  return (
    <Container>
      <Header onPressSearch={() => {}} onPressSettings={() => {}} />
    </Container>
  );
}
