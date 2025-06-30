import { Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../../firebaseConfig";

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

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);

      router.push("/(tabs)");
    } catch (error: any) {
      Alert.alert("Sign up failed: " + error.message);
    }
  };

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
        })
        .catch((error) => {
          setLoading(false);

          Alert.alert("Error adding document: ", error);
        });

      signUp();
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
          <Title>Register</Title>

          <TouchableOpacity>
            <Description color={colors.white}>
              If You Need Any Support
              <Description color={colors.primary}> Click Here</Description>
            </Description>
          </TouchableOpacity>
        </ContentText>

        <InputComponent
          testID="input_name_testID"
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

        <InputComponent
          testID="input_repeat_password_testID"
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
          testID="button_signup_testID"
          title={"Register"}
          onPress={() => handleSubmit()}
          isLoading={loading}
        />

        <ButtonRegister
          testID="button_signin_testID"
          onPress={() => router.back()}
        >
          <Description color={colors.white}>
            have an account?
            <Description color={colors.yellow}> Log In</Description>
          </Description>
        </ButtonRegister>
      </Body>
    </Container>
  );
}
