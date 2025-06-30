import { render } from "@testing-library/react-native";

import PerfilScreen from "./perfil";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/auth", () => ({
  initializeAuth: jest.fn(),
  getReactNativePersistence: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

describe("<PerfilScreen />", () => {
  const setup = () => render(<PerfilScreen />);

  it("should render screen container", () => {
    const { getAllByTestId } = setup();

    const container = getAllByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
