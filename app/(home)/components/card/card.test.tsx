import { fireEvent, render } from "@testing-library/react-native";

import Card from "./card";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

const mockPush = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}));

describe("<Card />", () => {
  const setup = () => render(<Card />);

  it("should call function onPress", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_testID");

    fireEvent.press(button);

    expect(mockPush).toHaveBeenCalled();
  });
});
