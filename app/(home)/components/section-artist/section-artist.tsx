import { FlatList, TouchableOpacity } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

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
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

type ItemProps = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export default function SectionArtist() {
  const [data, setData] = useState<ItemProps[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const querySnapshot = await getDocs(collection(db, "artist"));

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
      <Content onPress={() => router.push("/(artist)")}>
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
        data={data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
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
