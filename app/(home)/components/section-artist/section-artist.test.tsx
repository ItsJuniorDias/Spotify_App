import { fireEvent, render } from "@testing-library/react-native";
import { useQuery } from "@tanstack/react-query";
import SectionArtist from "./section-artist";
import { getDocs } from "firebase/firestore";

jest.mock("expo-image", () => ({
  Image: jest.fn(),
}));

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
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

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/auth", () => ({
  initializeAuth: jest.fn(),
  getReactNativePersistence: jest.fn(),
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

describe("<SectionArtist />", () => {
  const setup = () => render(<SectionArtist />);

  it("should call function onPress", () => {
    const { getByTestId } = setup();

    const button = getByTestId("button_testID");

    fireEvent.press(button);
  });

  it("should call function fetch in useQuery", () => {
    useQuery.mock.calls[0][0].queryFn();

    expect(getDocs).toHaveBeenCalled();
  });
});
