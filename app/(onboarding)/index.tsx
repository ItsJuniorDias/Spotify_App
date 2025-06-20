import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import logo from "../../assets/images/logo.png";
import image_body from "../../assets/images/image_body.png";

import {
  Container,
  ContentLogo,
  ImageLogo,
  ImageBody,
  ContentBody,
  Footer,
  Title,
  Description,
  Button,
  TextButton,
} from "./styles";

export default function OnboardingScreen() {
  return (
    <Container>
      <ContentLogo>
        <ImageLogo source={logo} />
      </ContentLogo>

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

          <Button>
            <TextButton>Get Started</TextButton>
          </Button>
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
