import { renderHook } from "@testing-library/react";

import { AuthProvider, useAuth } from "./AuthContext";

jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn(),
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

    console.log(result.current, "CURRENT");

    // expect(result.current.count).toBe(1);
  });
});
