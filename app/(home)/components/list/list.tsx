import { FlatList } from "react-native";

import card_1 from "../../../../assets/images/card_1.png";
import card_2 from "../../../../assets/images/card_2.png";
import card_3 from "../../../../assets/images/card_3.png";

import {
  Container,
  Content,
  Title,
  Thumbnail,
  Name,
  Description,
} from "./styles";

type ItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function List() {
  const DATA = [
    {
      id: "1",
      image: card_1,
      title: "ArTi Untuk Cinta",
      description: "Arsy Widianto, Tiar",
    },
    {
      id: "2",
      image: card_2,
      title: "Runtuh",
      description: "Feby Putri, Fiersa B",
    },
    {
      id: "3",
      image: card_3,
      title: "Blue Jeans",
      description: "GANGGA",
    },
  ];

  const Item = ({ image, title, description }: ItemProps) => (
    <>
      <Content>
        <Thumbnail source={image} />
        <Name>{title}</Name>

        <Description>{description}</Description>
      </Content>
    </>
  );

  return (
    <>
      <Container>
        <Title> Today’s hits</Title>
      </Container>

      <FlatList
        data={DATA}
        horizontal
        renderItem={({ item }) => (
          <Item
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
