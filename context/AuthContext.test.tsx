import { renderHook } from "@testing-library/react";
import { render } from "@testing-library/react-native";

import { AuthProvider, useAuth } from "./AuthContext";

jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn(() => jest.fn()),
  initializeAuth: jest.fn(),
  getReactNativePersistence: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
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

jest.mock("@react-native-async-storage/async-storage", () => jest.fn());

describe("useAuth", () => {
  it("Behavior render hook useAuth", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBe(null);
  });

  it("Behavior render hook useAuth", () => {
    render(
      <AuthProvider>
        <></>
      </AuthProvider>
    );
  });
});
