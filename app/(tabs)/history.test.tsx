import { render } from "@testing-library/react-native";

import HistoryScreen from "./history";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

describe("<HistoryScreen />", () => {
  const setup = () => render(<HistoryScreen />);

  it("should render screen container", () => {
    const { getByTestId, debug } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
