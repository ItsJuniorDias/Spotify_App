import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoAaYFPBYUuFoMeK7E6vKuNQZ2e2RHdVs",
  authDomain: "spotify-app-b4f9d.firebaseapp.com",
  projectId: "spotify-app-b4f9d",
  storageBucket: "spotify-app-b4f9d.firebasestorage.app",
  messagingSenderId: "45511841363",
  appId: "1:45511841363:web:a1cda054b76ff5b56458a6",
  measurementId: "G-3CXJ2CPHJT",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getStorage(app);

export { db, auth };
