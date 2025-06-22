import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import Card from "../(home)/components/card/card";
import { Header } from "@/components";

import { Container } from "./styles";

export default function HomeScreen() {
  return (
    <Container>
      <Header onPressSearch={() => {}} onPressSettings={() => {}} />

      <Card />
    </Container>
  );
}
