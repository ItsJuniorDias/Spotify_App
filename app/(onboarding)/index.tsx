import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import image_body from "../../assets/images/image_body.png";

import {
  Container,
  ImageBody,
  ContentBody,
  Footer,
  Title,
  Description,
} from "./styles";
import { ButtonComponent, Header } from "@/components";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const navigation = useRouter();

  return (
    <Container>
      <Header />

      <ContentBody>
        <LinearGradient
          colors={["rgba(0,0,0,1)", "transparent"]}
          style={styles.background}
        />

        <ImageBody source={image_body} />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          style={styles.backgroundFooter}
        />

        <Footer>
          <Title>Music for everyone.</Title>

          <Description>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </Description>

          <ButtonComponent
            onPress={() => navigation.push("/(sign-in)")}
            title="Get started"
          />
        </Footer>
      </ContentBody>
    </Container>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    zIndex: 1,
  },
  backgroundFooter: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    zIndex: 1,
    marginTop: 220,
  },
});
