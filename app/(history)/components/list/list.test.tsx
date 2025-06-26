import { render } from "@testing-library/react-native";

import List from "./list";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

describe("<List />", () => {
  const setup = () => render(<List />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
