import { fireEvent, render } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import Header from "./header";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

const mockSignOut = jest.fn();

jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn(),
  getReactNativePersistence: jest.fn(),
  initializeAuth: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

describe("<Header />", () => {
  const setup = () => render(<Header />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });

  it("should call function handleSignOut", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_testID");

    fireEvent.press(button);
  });
});
