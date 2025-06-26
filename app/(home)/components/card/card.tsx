import { useRouter } from "expo-router";
import avatar from "../../../../assets/images/avatar.png";

import {
  Container,
  Content,
  Avatar,
  ContentText,
  Title,
  Name,
  Description,
} from "./styles";
export default function Card() {
  const router = useRouter();

  return (
    <Container>
      <Content
        testID="button_testID"
        onPress={() => router.push("/(music)")}
        activeOpacity={0.7}
      >
        <ContentText>
          <Title>Popular</Title>

          <Name>Sisa Rasa</Name>

          <Description>Popular</Description>
        </ContentText>

        <Avatar source={avatar} />
      </Content>
    </Container>
  );
}
