import { fireEvent, render } from "@testing-library/react-native";
import { Image } from "expo-image";

import ArtistScreen from "./index";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

const mockBack = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    back: mockBack,
  })),
}));

describe("<ArtistScreen />", () => {
  const setup = () => render(<ArtistScreen />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });

  it("should call function onPress", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_testID");

    fireEvent.press(button);

    expect(mockBack).toHaveBeenCalled();
  });
});
