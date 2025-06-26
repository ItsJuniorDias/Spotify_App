import { FlatList } from "react-native";

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

type ListProps = {
  data: ItemProps[];
};

export default function List({ data }: ListProps) {
  const Item = ({ image, title, description }: ItemProps) => (
    <>
      <Content>
        <Thumbnail source={{ uri: image }} />
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
        data={data}
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
