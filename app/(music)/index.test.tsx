import { fireEvent, render } from "@testing-library/react-native";

import MusicScreen from "./index";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

const mockPlay = jest.fn();

jest.mock("expo-audio", () => ({
  useAudioPlayer: jest.fn(() => ({
    play: mockPlay,
  })),
}));

describe("<MusicScreen />", () => {
  const setup = () => render(<MusicScreen />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    jest.runAllTimers();

    expect(container).toBeTruthy();
  });

  it("should call function play", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_play_testID");

    fireEvent.press(button);

    expect(mockPlay).toHaveBeenCalled();
  });
});
