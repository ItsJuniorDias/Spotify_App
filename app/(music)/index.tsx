import { TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAudioPlayer } from "expo-audio";

import Ionicons from "@expo/vector-icons/Ionicons";

import thumbnail_sisa from "../../assets/images/thumbnail_sisa.png";
import repeate_one from "../../assets/images/repeate_one.png";
import previous from "../../assets/images/previous.png";
import play from "../../assets/images/play.png";
import next from "../../assets/images/next.png";
import shuffle from "../../assets/images/shuffle.png";

import { colors } from "@/theme";
import { Header, TextCustom, ProgressBar } from "@/components";

import {
  Container,
  Content,
  Thumbnail,
  ContentText,
  ContentPlay,
  Icon,
  IconPlay,
  ContainerText,
} from "./styles";

const audioSource = require("../../assets/audio/sisa_rasa.mp3");

export default function MusicScreen() {
  const [progress, setProgress] = useState(0);

  const player = useAudioPlayer(audioSource);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 1 ? 0 : prev + 0.01));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header isButton onPress={router.back} title="Now Playing" />

      <Content>
        <Thumbnail source={thumbnail_sisa} />
      </Content>

      <ContentText>
        <ContainerText>
          <TextCustom title="Sisa Rasa" fontFamily="bold" fontSize={24} />

          <TextCustom title="Mahalini" fontFamily="semi-bold" fontSize={18} />
        </ContainerText>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={40} color={colors.primary} />
        </TouchableOpacity>
      </ContentText>

      <ProgressBar progress={progress} />

      <ContentPlay>
        <TouchableOpacity onPress={() => {}}>
          <Icon source={repeate_one} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Icon source={previous} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => player.play()}>
          <IconPlay source={play} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Icon source={next} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Icon source={shuffle} />
        </TouchableOpacity>
      </ContentPlay>
    </Container>
  );
}
