import { useEffect } from "react";
import { useRouter } from "expo-router";

import logo from "../../assets/images/logo.png";

import { Container, ImageLogo } from "./styles";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      return router.push("/(onboarding)");
    }, 2000);
  }, [router]);

  return (
    <Container testID="container_testID">
      <ImageLogo testID="image_testID" source={logo} />
    </Container>
  );
}
