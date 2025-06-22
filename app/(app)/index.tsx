import { useRouter } from "expo-router";

import logo from "../../assets/images/logo.png";

import { Container, ImageLogo } from "./styles";
import { useEffect } from "react";
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      return router.push("/(onboarding)");
    }, 2000);
  }, [router]);

  return (
    <Container>
      <ImageLogo source={logo} />
    </Container>
  );
}
