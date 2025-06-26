import { FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useQuery } from "@tanstack/react-query";

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
  const fetch = async () => {
    const querySnapshot = await getDocs(collection(db, "today_hits"));

    const dataList = (querySnapshot?.docs ?? []).map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return dataList;
  };

  const { data } = useQuery({
    queryKey: ["repoDataToday"],
    queryFn: () => fetch(),
  });

  const Item = ({ image, title, description }: ItemProps) => (
    <>
      <Content testID="button_testID" onPress={() => {}}>
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
