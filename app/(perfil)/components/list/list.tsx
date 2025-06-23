import {
  FlatList,
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
} from "react-native";

import card_history_today from "../../../../assets/images/card_history_today.png";
import card_history_today_1 from "../../../../assets/images/card_history_today_1.png";
import card_history_today_2 from "../../../../assets/images/card_history_today_2.png";

import card_history_yesterday_1 from "../../../../assets/images/card_history_yesterday_1.png";
import card_history_yesterday_2 from "../../../../assets/images/card_history_yesterday_2.png";
import card_history_yesterday_3 from "../../../../assets/images/card_history_yesterday_3.png";

import {
  Avatar,
  Container,
  Content,
  ContentText,
  Description,
  Name,
  Title,
} from "./styles";

type ItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function List() {
  const DATA = [
    {
      title: "Mostly played",
      data: [
        {
          image: card_history_today_1,
          title: "Dekat Di Hati",
          description: "RAN",
        },
        {
          image: card_history_yesterday_2,
          title: "Bigger Than The Whole...",
          description: "Taylor Swift",
        },
        {
          image: card_history_yesterday_3,
          title: "Matilda",
          description: "Harry Styles",
        },
      ],
    },
  ];

  const Item = ({ image, title, description }: ItemProps) => (
    <>
      <Content activeOpacity={0.7}>
        <Avatar source={image} />

        <ContentText>
          <Name>{title}</Name>
          <Description>{description}</Description>
        </ContentText>
      </Content>
    </>
  );

  return (
    <>
      <Container>
        <SectionList
          sections={DATA}
          renderItem={({ item }) => (
            <Item
              image={item?.image}
              title={item?.title}
              description={item?.description}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{title}</Title>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </Container>
    </>
  );
}
