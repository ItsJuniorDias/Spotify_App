import { useState } from "react";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

import { ButtonComponent, Header, InputComponent } from "@/components";

import { Alert, TouchableOpacity } from "react-native";

import { colors } from "@/theme";

import {
  Container,
  Body,
  Title,
  Description,
  ContentText,
  ButtonRegister,
} from "./styles";

export default function SignInScreen() {
  const [value, onChangeValue] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [error, setError] = useState({
    errorEmail: false,
    errorPassword: false,
  });

  const router = useRouter();

  const handleSubmit = async () => {
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

      setLoading(true);

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          value.email,
          value.password
        );

        const user = userCredential.user;

        if (user) {
          router.push("/(tabs)");

          setLoading(false);
        }
      } catch (error) {
        setLoading(false);

        Alert.alert("Firebase Error", error.message);
      }
    }
  };

  return (
    <Container testID="container_testID">
      <Header
        testID="button_goback_testID"
        isButton
        onPress={() => router.back()}
      />

      <Body>
        <ContentText>
          <Title>Log In</Title>

          <TouchableOpacity>
            <Description color={colors.white}>
              If You Need Any Support
              <Description color={colors.primary}> Click Here</Description>
            </Description>
          </TouchableOpacity>
        </ContentText>

        <InputComponent
          testID="input_email_testID"
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
          testID="input_password_testID"
          placeholder="Password"
          value={value.password}
          onFocus={() =>
            setError((prevState) => ({
              ...prevState,
              errorPassword: false,
            }))
          }
          isButtonHide
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          onChangeText={(item: string) =>
            onChangeValue((prevState) => ({
              ...prevState,
              password: item,
            }))
          }
          isError={error.errorPassword}
        />

        <ButtonComponent
          testID="button_signin_testID"
          title={"Log In"}
          onPress={() => handleSubmit()}
          isLoading={loading}
        />

        <ButtonRegister
          testID="button_register_testID"
          onPress={() => router.push("/(sign-up)")}
        >
          <Description color={colors.white}>
            don't have an account?
            <Description color={colors.yellow}> Register</Description>
          </Description>
        </ButtonRegister>
      </Body>
    </Container>
  );
}
