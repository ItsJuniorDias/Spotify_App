import { Header } from "@/components";
import Card from "../(home)/components/card/card";
import List from "../(home)/components/list/list";
import SectionArtist from "../(home)/components/section-artist/section-artist";

import { Container } from "./styles";

export default function HomeScreen() {
  return (
    <Container testID="container_testID" showsVerticalScrollIndicator={false}>
      <Header onPressSearch={() => {}} onPressSettings={() => {}} />

      <Card />

      <List />

      <SectionArtist />
    </Container>
  );
}
