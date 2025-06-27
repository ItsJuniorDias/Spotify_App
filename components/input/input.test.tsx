import { fireEvent, render } from "@testing-library/react-native";

import { InputComponent } from "./input";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

describe("<InputComponent />", () => {
  const props = {
    testID: "input_testID",
    placeholder: "",
    value: "",
    onChangeText: jest.fn(),
    onFocus: jest.fn(),
    isButtonHide: true,
    secureTextEntry: false,
    setSecureTextEntry: jest.fn(),
    isError: true,
  };

  const setup = () => render(<InputComponent {...props} />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_input_testID");

    expect(container).toBeTruthy();
  });

  it("should call state screen container", () => {
    const { getByTestId, debug } = setup();

    const button = getByTestId("button_input_testID");

    fireEvent.press(button);
  });

  it("should render error", () => {
    const { getByTestId } = setup();

    const text = getByTestId("error_testID");

    expect(text).toBeTruthy();
  });

  it("should call funtion input onChangeText", () => {
    const { getByTestId } = setup();

    const input = getByTestId("input_testID");

    fireEvent.changeText(input, "juniordias_@live.com");

    expect(input.props.onChangeText).toHaveBeenCalled();
  });
});
