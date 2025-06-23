import { FlatList, TouchableOpacity } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import avatar_1 from "../../../../assets/images/avatar_1.png";
import avatar_2 from "../../../../assets/images/avatar_2.png";
import avatar_3 from "../../../../assets/images/avatar_3.png";

import {
  Container,
  Content,
  ContentText,
  ContentThumbnail,
  Description,
  Name,
  Thumbnail,
  Title,
} from "./styles";

type ItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function SectionArtist() {
  const DATA = [
    {
      id: "1",
      image: avatar_1,
      title: "Adele",
      description: "43,877,516 monthly listeners",
    },
    {
      id: "2",
      image: avatar_2,
      title: "Tiara Andini",
      description: "38,782,341 monthly listeners",
    },
    {
      id: "3",
      image: avatar_3,
      title: "Tulus",
      description: "32,908,713 monthly listeners",
    },
  ];

  const Item = ({ image, title, description }: ItemProps) => (
    <>
      <Content>
        <ContentThumbnail>
          <Thumbnail source={image} />

          <ContentText>
            <Name>{title}</Name>
            <Description>{description}</Description>
          </ContentText>
        </ContentThumbnail>

        <TouchableOpacity onPress={() => {}}>
          <SimpleLineIcons name="arrow-right" size={18} color="white" />
        </TouchableOpacity>
      </Content>
    </>
  );

  return (
    <Container>
      <Title>Artists</Title>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
