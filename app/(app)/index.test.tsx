import { render } from "@testing-library/react-native";

import SplashScreen from "./index";

describe("<SplashScreen />", () => {
  test("Text renders correctly on SplashScreen", () => {
    const { getByText } = render(<SplashScreen />);

    // getByText("Welcome!");
  });
});
