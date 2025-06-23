import { FlatList } from "react-native";

import card_liked from "../../../../assets/images/card_liked.png";
import card_happiers from "../../../../assets/images/card_happiers.png";
import card_sadness from "../../../../assets/images/card_sadness.png";
import card_party from "../../../../assets/images/card_party.png";
import card_birthday from "../../../../assets/images/card_birthday.png";
import card_highschool from "../../../../assets/images/card_highschool.png";

import { Container, Content, Thumbnail, Name, Description } from "./styles";

type ItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function List() {
  const DATA = [
    {
      id: "1",
      image: card_liked,
      title: "Liked Songs",
      description: "128 song",
    },
    {
      id: "2",
      image: card_happiers,
      title: "Happiers",
      description: "45 songs",
    },
    {
      id: "3",
      image: card_sadness,
      title: "Sadness",
      description: "83 songs",
    },
    {
      id: "4",
      image: card_party,
      title: "Party",
      description: "21 songs",
    },
    {
      id: "3",
      image: card_birthday,
      title: "Birthday",
      description: "16 songs",
    },
    {
      id: "4",
      image: card_highschool,
      title: "Highschool",
      description: "78 songs",
    },
  ];

  const Item = ({ image, title, description }: ItemProps) => (
    <>
      <Content>
        <Thumbnail contentFit="cover" source={image} />
        <Name>{title}</Name>

        <Description>{description}</Description>
      </Content>
    </>
  );

  return (
    <>
      <Container>
        <FlatList
          data={DATA}
          numColumns={2}
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
    </>
  );
}
