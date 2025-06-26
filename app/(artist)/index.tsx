import { FlatList, View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import tulus from "../../assets/images/tulus.png";
import tulus_card_1 from "../../assets/images/tulus_card_1.png";
import tulus_card_2 from "../../assets/images/tulus_card_2.png";
import tulus_card_3 from "../../assets/images/tulus_card_3.png";

import { useRouter } from "expo-router";
import { TextCustom } from "@/components";

import {
  Avatar,
  Button,
  Container,
  ContainerFollowers,
  ContainerText,
  ContentButton,
  ContentFollowers,
  ContentItem,
  ContentSongs,
  ContentText,
  ContentTitle,
  Header,
  IconList,
  Thumbnail,
} from "./styles";

interface ItemProps {
  image: string;
  title: string;
  description: string;
}

export default function ArtistScreen() {
  const router = useRouter();

  const DATA = [
    {
      id: "1",
      image: tulus_card_1,
      title: "Manusia",
      description: "2022",
    },
    {
      id: "2",
      image: tulus_card_2,
      title: "Monokrom",
      description: "2016",
    },
    {
      id: "3",
      image: tulus_card_3,
      title: "Gajah",
      description: "2014",
    },
  ];

  const DATA_SONGS = [
    {
      id: "1",
      image: tulus_card_1,
      title: "Hati-Hati di Jalan",
    },
    {
      id: "2",
      image: tulus_card_1,
      title: "Diri",
    },
  ];

  const Item = ({ image, title, description }: ItemProps) => (
    <ContentItem>
      <Avatar source={image} />

      <ContainerText>
        <TextCustom title={title} fontFamily="semi-bold" fontSize={14} />
        <TextCustom title={description} fontFamily="regular" fontSize={14} />
      </ContainerText>
    </ContentItem>
  );

  const ItemSongs = ({ image, title }: ItemProps) => (
    <ContentSongs>
      <IconList source={image} />

      <TextCustom title={title} fontFamily="semi-bold" fontSize={14} />
    </ContentSongs>
  );

  return (
    <Container testID="container_testID">
      <Header>
        <ContentButton>
          <Button testID="button_testID" onPress={() => router.back()}>
            <SimpleLineIcons name="arrow-left" size={14} color="white" />
          </Button>
        </ContentButton>

        <Thumbnail source={tulus} />
      </Header>

      <ContentText>
        <TextCustom title="Tulus" fontFamily="bold" fontSize={24} />
      </ContentText>

      <ContentFollowers>
        <ContainerFollowers>
          <TextCustom title="Followers" fontFamily="regular" fontSize={14} />

          <TextCustom title="12,7K" fontFamily="semi-bold" fontSize={20} />
        </ContainerFollowers>

        <ContainerFollowers>
          <TextCustom
            title="Monthly listerners"
            fontFamily="regular"
            fontSize={14}
          />

          <TextCustom title="4,88M" fontFamily="semi-bold" fontSize={20} />
        </ContainerFollowers>
      </ContentFollowers>

      <ContentTitle>
        <TextCustom title="Albums" fontFamily="semi-bold" fontSize={24} />
      </ContentTitle>

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

      <ContentTitle>
        <TextCustom title="Songs" fontFamily="semi-bold" fontSize={24} />
      </ContentTitle>

      <FlatList
        data={DATA_SONGS}
        renderItem={({ item }) => (
          <ItemSongs image={item.image} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
