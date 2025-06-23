import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import List from "../(history)/components/list/list";

import { Header } from "@/components";

import { Container } from "./styles";

export default function HistoryScreen() {
  return (
    <Container>
      <Header title="History" onPressSearch={() => {}} />

      <List />
    </Container>
  );
}
