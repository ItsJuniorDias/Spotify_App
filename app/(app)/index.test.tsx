import { render } from "@testing-library/react-native";

import SplashScreen from "./index";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("<SplashScreen />", () => {
  const setup = () => render(<SplashScreen />);

  it("should render screen container", async () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  }, 1000);

  it("should render screen image logo ", async () => {
    const { getByTestId } = setup();

    const container = getByTestId("image_testID");

    expect(container).toBeTruthy();
  }, 1000);
});
