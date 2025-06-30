import { render } from "@testing-library/react-native";

import PlayListScreen from "./playlist";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

describe("<PlayListScreen />", () => {
  const setup = () => render(<PlayListScreen />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
