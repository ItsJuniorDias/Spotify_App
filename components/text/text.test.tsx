import { render } from "@testing-library/react-native";

import { TextCustom, TextProps } from "./text";
import {} from "react-native/Libraries/Text/Text";

describe("<TextCustom />", () => {
  const props: TextProps = {
    testID: "container_testID",
    title: "Title",
    fontFamily: "regular",
    fontSize: 14,
  };

  const setup = () => render(<TextCustom {...props} />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
