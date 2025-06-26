import Card from "../(home)/components/card/card";
import List from "../(home)/components/list/list";
import SectionArtist from "../(home)/components/section-artist/section-artist";

import { Header } from "@/components";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useQuery } from "@tanstack/react-query";

import { Container } from "./styles";

export default function HomeScreen() {
  const fetch = async () => {
    const querySnapshot = await getDocs(collection(db, "today_hits"));

    const dataList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return dataList;
  };

  const { data } = useQuery({
    queryKey: ["repoDataToday"],
    queryFn: () => fetch(),
  });

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header onPressSearch={() => {}} onPressSettings={() => {}} />

      <Card />

      <List data={data} />

      <SectionArtist />
    </Container>
  );
}
