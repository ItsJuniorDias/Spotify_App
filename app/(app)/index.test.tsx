import { render } from "@testing-library/react-native";

import SplashScreen from "./index";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.useFakeTimers();

describe("<SplashScreen />", () => {
  const setup = () => render(<SplashScreen />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    jest.runAllTimers();

    expect(container).toBeTruthy();
  });

  it("should render screen image logo ", () => {
    const { getByTestId } = setup();

    const container = getByTestId("image_testID");

    jest.runAllTimers();

    expect(container).toBeTruthy();
  });
});
