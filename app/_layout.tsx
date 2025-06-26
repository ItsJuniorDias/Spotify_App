import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "../context/AuthContext";

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StatusBar style="light" />

          <Stack>
            <Stack.Screen name="(app)/index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(onboarding)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(sign-in)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(sign-up)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(music)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(artist)/index"
              options={{ headerShown: false }}
            />

            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>{" "}
      </AuthProvider>
    </QueryClientProvider>
  );
}
