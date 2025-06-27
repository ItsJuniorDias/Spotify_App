import { TextCustom } from "@/components";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Container, Content, Touchable } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { colors } from "@/theme";

interface HeaderProps {
  title?: string;
}

export default function Body({ title }: HeaderProps) {
  return (
    <Container testID="container_testID">
      <Content>
        <Touchable>
          <AntDesign size={40} name="adduser" color={colors.white} />

          <TextCustom
            title="Find friend"
            fontFamily="semi-bold"
            fontSize={16}
          />
        </Touchable>

        <Touchable>
          <Feather size={40} name="share" color={colors.white} />

          <TextCustom title="Share" fontFamily="semi-bold" fontSize={16} />
        </Touchable>
      </Content>
    </Container>
  );
}
