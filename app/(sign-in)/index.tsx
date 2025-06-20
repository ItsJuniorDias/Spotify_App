import { useRouter } from "expo-router";
import { Header } from "@/components";

import { Container, Body, Title, Description } from "./styles";
import { TouchableOpacity } from "react-native";

export default function SignInScreen() {
  const router = useRouter();

  return (
    <Container>
      <Header isButton onPress={() => router.back()} />

      <Body>
        <Title>Log In</Title>

        <TouchableOpacity>
          <Description>
            If You Need Any Support{" "}
            <Description isColor>Click Here</Description>
          </Description>
        </TouchableOpacity>
      </Body>
    </Container>
  );
}
