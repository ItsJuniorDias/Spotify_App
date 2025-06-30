import { fireEvent, render } from "@testing-library/react-native";
import { addDoc } from "firebase/firestore";
import SignUp from "./index";

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
  createUserWithEmailAndPassword: jest.fn(),
}));

const mockAddDoc = jest.fn();

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn().mockResolvedValue({}),
  setDoc: jest.fn(),
  doc: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

describe("<SignUp />", () => {
  const setup = () => render(<SignUp />);

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

  it("should call function signin", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_signin_testID");

    fireEvent.press(button);

    expect(mockBack).toHaveBeenCalled();
  });

  it("should call function handleSubmit", () => {
    mockAddDoc.mockResolvedValue({});

    const { getByTestId } = setup();

    const inputName = getByTestId("input_name_testID");

    fireEvent.changeText(inputName, "Alenxadre junior");

    const inputEmail = getByTestId("input_email_testID");

    fireEvent.changeText(inputEmail, "juniordias_@live.com");

    const inputPassword = getByTestId("input_password_testID");

    fireEvent.changeText(inputPassword, "1234567");

    const inputRepeatPassword = getByTestId("input_repeat_password_testID");

    fireEvent.changeText(inputRepeatPassword, "1234567");

    const button = getByTestId("button_signup_testID");

    fireEvent.press(button);

    expect(addDoc).toHaveBeenCalled();
  });

  it("should call function error handleSubmit", () => {
    const { getByTestId } = setup();

    const inputName = getByTestId("input_name_testID");

    fireEvent.changeText(inputName, "");

    fireEvent(inputName, "focus");

    const inputEmail = getByTestId("input_email_testID");

    fireEvent.changeText(inputEmail, "");

    fireEvent(inputEmail, "focus");

    const inputPassword = getByTestId("input_password_testID");

    fireEvent.changeText(inputPassword, "");

    fireEvent(inputPassword, "focus");

    const inputRepeatPassword = getByTestId("input_repeat_password_testID");

    fireEvent.changeText(inputRepeatPassword, "");

    fireEvent(inputRepeatPassword, "focus");

    const button = getByTestId("button_signup_testID");

    fireEvent.press(button);

    expect(addDoc).toHaveBeenCalled();
  });
});
