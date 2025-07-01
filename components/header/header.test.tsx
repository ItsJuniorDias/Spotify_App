import { render } from "@testing-library/react-native";

import { Header } from "./header";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

describe("<Header />", () => {
  const props = {
    testID: "button_testID",
    title: "Header Title",
    isButton: true,
    onPress: jest.fn(),
    onPressSearch: jest.fn(),
    onPressSettings: jest.fn(),
  };

  const setup = () => render(<Header {...props} />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("button_testID");

    expect(container).toBeTruthy();
  });
});
