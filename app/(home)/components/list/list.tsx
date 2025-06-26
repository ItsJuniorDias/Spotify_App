import { FlatList } from "react-native";

import { collection, getDocs } from "firebase/firestore";

import {
  Container,
  Content,
  Title,
  Thumbnail,
  Name,
  Description,
} from "./styles";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";

type ItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function List() {
  const [data, setData] = useState<{ id: string }[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const querySnapshot = await getDocs(collection(db, "today_hits"));

      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(dataList);
    };

    fetch();
  }, []);

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
