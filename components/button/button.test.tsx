import { fireEvent, render } from "@testing-library/react-native";

import { ButtonComponent } from "./button";

describe("<ButtonComponent />", () => {
  const mockPush = jest.fn();

  const props = {
    testID: "button_testID",
    title: "Button",
    onPress: mockPush,
    isLoading: false,
  };

  const setup = () => render(<ButtonComponent {...props} />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("button_testID");

    expect(container).toBeTruthy();
  });

  it("should call function onPress", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_testID");

    fireEvent.press(button);

    expect(mockPush).toHaveBeenCalled();
  });
});
