import { TextCustom } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import avatar from "../../../../assets/images/alexandre.png";

import {
  Container,
  Content,
  Avatar,
  ContentText,
  ContentFollowers,
  ContainerFollowers,
  Row,
} from "./styles";
import { TouchableOpacity, View } from "react-native";
import { colors } from "@/theme";
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      router.push("/(sign-in)");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Container testID="container_testID">
      <Content>
        <Row>
          <View />
          <TextCustom title="Perfil" fontFamily="bold" fontSize={24} />

          <TouchableOpacity
            testID="button_testID"
            onPress={() => handleSignOut()}
          >
            <MaterialIcons name="logout" size={24} color={colors.white} />
          </TouchableOpacity>
        </Row>

        <Avatar source={avatar} />

        <ContentText>
          <TextCustom
            title="Alexandre Junior"
            fontFamily="semi-bold"
            fontSize={20}
          />
          <TextCustom
            title="its_juniordias1997@outlook.com.br"
            fontFamily="regular"
            fontSize={14}
          />
        </ContentText>

        <ContentFollowers>
          <ContainerFollowers>
            <TextCustom title="Followers" fontFamily="regular" fontSize={12} />
            <TextCustom title="129" fontFamily="semi-bold" fontSize={20} />
          </ContainerFollowers>

          <ContainerFollowers>
            <TextCustom title="Following" fontFamily="regular" fontSize={12} />
            <TextCustom title="238" fontFamily="semi-bold" fontSize={20} />
          </ContainerFollowers>
        </ContentFollowers>
      </Content>
    </Container>
  );
}
