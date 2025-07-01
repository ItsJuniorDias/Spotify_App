import { render } from "@testing-library/react-native";

import { ProgressBar } from "./progress-bar";

describe("<ProgressBar />", () => {
  const props = {
    testID: "container_testID",
    progress: 100,
  };

  const setup = () => render(<ProgressBar {...props} />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
