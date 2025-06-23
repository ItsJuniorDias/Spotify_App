import { TextCustom } from "@/components";

import avatar from "../../../../assets/images/alexandre.png";

import {
  Container,
  Content,
  Avatar,
  ContentText,
  ContentFollowers,
  ContainerFollowers,
} from "./styles";
import { View } from "react-native";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Content>
        <TextCustom title="Perfil" fontFamily="bold" fontSize={24} />

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
