import { fireEvent, render } from "@testing-library/react-native";
import { LinearGradient } from "expo-linear-gradient";
import OnboardingScreen from "./index";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("expo-linear-gradient", () => ({
  LinearGradient: jest.fn(),
}));

const mockPush = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}));

jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn(),
  getReactNativePersistence: jest.fn(),
  initializeAuth: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  getDocs: jest.fn(() => ({
    querySnapshot: {
      docs: [],
    },
  })),
  getFirestore: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

describe("<OnboardingScreen />", () => {
  const setup = () => render(<OnboardingScreen />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });

  it("should call function router push", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_testID");

    fireEvent.press(button);

    expect(mockPush).toHaveBeenCalled();
  });
});
