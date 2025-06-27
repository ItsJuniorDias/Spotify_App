import { render } from "@testing-library/react-native";

import Body from "./body";

describe("<Body />", () => {
  const setup = () => render(<Body />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
