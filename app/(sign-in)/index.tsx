import { useRouter } from "expo-router";
import { ButtonComponent, Header, InputComponent } from "@/components";

import { Container, Body, Title, Description, ContentText } from "./styles";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

export default function SignInScreen() {
  const [value, onChangeValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errorEmail: false,
    errorPassword: false,
  });

  const router = useRouter();

  const handleSubmit = () => {
    if (value.email === "" && value.password === "") {
      setError((prevState) => ({
        ...prevState,
        errorEmail: true,
        errorPassword: true,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        errorEmail: false,
        errorPassword: false,
      }));
    }
  };

  return (
    <Container>
      <Header isButton onPress={() => router.back()} />

      <Body>
        <ContentText>
          <Title>Log In</Title>

          <TouchableOpacity>
            <Description>
              If You Need Any Support
              <Description isColor>Click Here</Description>
            </Description>
          </TouchableOpacity>
        </ContentText>

        <InputComponent
          placeholder="Email"
          value={value.email}
          onFocus={() =>
            setError((prevState) => ({
              ...prevState,
              errorEmail: false,
            }))
          }
          onChangeText={(item: string) =>
            onChangeValue((prevState) => ({
              ...prevState,
              email: item,
            }))
          }
          isError={error.errorEmail}
        />

        <InputComponent
          placeholder="Password"
          value={value.password}
          onFocus={() =>
            setError((prevState) => ({
              ...prevState,
              errorPassword: false,
            }))
          }
          secureTextEntry
          onChangeText={(item: string) =>
            onChangeValue((prevState) => ({
              ...prevState,
              password: item,
            }))
          }
          isError={error.errorPassword}
        />

        <ButtonComponent title="Log In" onPress={() => handleSubmit()} />
      </Body>
    </Container>
  );
}
