import { render } from "@testing-library/react-native";

import SignIn from "./index";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(),
  getReactNativePersistence: jest.fn(),
  initializeAuth: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

describe("<SignIn />", () => {
  const setup = () => render(<SignIn />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
