import { Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { db } from "../../firebaseConfig";

import { ButtonComponent, Header, InputComponent } from "@/components";

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
    id: "",
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextRepeatPassword, setSecureTextRepeatPassword] =
    useState(true);

  const [error, setError] = useState({
    errorName: false,
    errorEmail: false,
    errorPassword: false,
    errorRepeatPassword: false,
  });

  const router = useRouter();

  const handleSubmit = async () => {
    if (
      value.name === "" &&
      value.email === "" &&
      value.password === "" &&
      value.repeatPassword === ""
    ) {
      setError((prevState) => ({
        ...prevState,
        errorName: true,
        errorEmail: true,
        errorPassword: true,
        errorRepeatPassword: true,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        errorName: false,
        errorEmail: false,
        errorPassword: false,
        errorRepeatPassword: false,
      }));

      setLoading(true);

      addDoc(collection(db, "users"), {
        id: "",
        name: value.name,
        email: value.email,
        password: value.password,
      })
        .then((response) => {
          setLoading(false);

          setDoc(
            doc(db, "users", response.id),
            {
              id: response.id,
            },
            { merge: true }
          );

          Alert.alert("Document written with ID: ", response.id);
        })
        .catch((error) => {
          setLoading(false);

          Alert.alert("Error adding document: ", error);
        });
    }
  };

  return (
    <Container>
      <Header isButton onPress={() => router.back()} />

      <Body>
        <ContentText>
          <Title>Register</Title>

          <TouchableOpacity>
            <Description color={colors.white}>
              If You Need Any Support
              <Description color={colors.primary}> Click Here</Description>
            </Description>
          </TouchableOpacity>
        </ContentText>

        <InputComponent
          placeholder="Name"
          value={value.name}
          onFocus={() =>
            setError((prevState) => ({
              ...prevState,
              errorName: false,
            }))
          }
          onChangeText={(item: string) =>
            onChangeValue((prevState) => ({
              ...prevState,
              name: item,
            }))
          }
          isError={error.errorName}
        />

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

        <InputComponent
          placeholder="Repeat Password"
          value={value.repeatPassword}
          onFocus={() =>
            setError((prevState) => ({
              ...prevState,
              errorRepeatPassword: false,
            }))
          }
          isButtonHide
          secureTextEntry={secureTextRepeatPassword}
          setSecureTextEntry={setSecureTextRepeatPassword}
          onChangeText={(item: string) =>
            onChangeValue((prevState) => ({
              ...prevState,
              repeatPassword: item,
            }))
          }
          isError={error.errorRepeatPassword}
        />

        <ButtonComponent
          title={"Register"}
          onPress={() => handleSubmit()}
          isLoading={loading}
        />

        <ButtonRegister onPress={() => router.back()}>
          <Description color={colors.white}>
            have an account?
            <Description color={colors.yellow}> Log In</Description>
          </Description>
        </ButtonRegister>
      </Body>
    </Container>
  );
}
