import { render } from "@testing-library/react-native";

import HomeScreen from "./index";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  getDocs: jest.fn(() => ({
    querySnapshot: {
      docs: [],
    },
  })),
  getFirestore: jest.fn(),
}));

jest.mock("firebase/auth", () => ({
  initializeAuth: jest.fn(),
  getReactNativePersistence: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(() => ({
    data: [
      {
        image: "image/path",
        title: "title",
        description: "description",
      },
    ],
  })),
}));

describe("<HomeScreen />", () => {
  const setup = () => render(<HomeScreen />);

  it("should render screen container", () => {
    const { getByTestId } = setup();

    const container = getByTestId("container_testID");

    expect(container).toBeTruthy();
  });
});
