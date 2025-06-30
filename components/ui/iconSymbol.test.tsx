import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { IconSymbol } from "./IconSymbol";

jest.mock("@expo/vector-icons", () => ({
  MaterialIcons: jest.fn(),
}));

describe("<IconSymbol />", () => {
  const setup = () =>
    render(
      <IconSymbol
        testID="container_testID"
        size={28}
        name="house.fill"
        color={"#333333"}
      />
    );

  it("should render screen container", () => {
    setup();
  });
});
