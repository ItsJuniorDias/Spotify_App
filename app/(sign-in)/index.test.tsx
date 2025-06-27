import { fireEvent, render } from "@testing-library/react-native";

import SignIn from "./index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

const mockPush = jest.fn();
const mockBack = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
    back: mockBack,
  })),
}));

jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(() => ({
    user: {},
  })),
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

  it("should call function go back", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_goback_testID");

    fireEvent.press(button);

    expect(mockBack).toHaveBeenCalled();
  });

  it("should call function register", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_register_testID");

    fireEvent.press(button);

    expect(mockPush).toHaveBeenCalled();
  });

  it("should call function handleSubmit", () => {
    const { getByTestId } = setup();

    const inputEmail = getByTestId("input_email_testID");

    fireEvent.changeText(inputEmail, "juniordias_@live.com");

    const inputPassword = getByTestId("input_password_testID");

    fireEvent.changeText(inputPassword, "1234567");

    const button = getByTestId("button_signin_testID");

    fireEvent.press(button);

    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it("should call function error handleSubmit", () => {
    const { getByTestId } = setup();

    const inputEmail = getByTestId("input_email_testID");

    fireEvent.changeText(inputEmail, "");

    fireEvent(inputEmail, "focus");

    const inputPassword = getByTestId("input_password_testID");

    fireEvent.changeText(inputPassword, "");

    fireEvent(inputPassword, "focus");

    const button = getByTestId("button_signin_testID");

    fireEvent.press(button);

    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
