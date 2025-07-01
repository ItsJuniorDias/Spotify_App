import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

import { Container } from "./styles";
import { colors } from "@/theme";

interface ProgressBarProps {
  testID?: string;
  progress: number;
}

export function ProgressBar({ testID, progress }: ProgressBarProps) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const translateXInterpolated = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  return (
    <Container testID={testID}>
      <View style={styles.container}>
        <View style={styles.track}>
          <Animated.View
            style={[styles.filled, { width: widthInterpolated }]}
          />

          <Animated.View
            style={[
              styles.thumb,
              { transform: [{ translateX: translateXInterpolated }] },
            ]}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: 300,
    alignItems: "center",
    zIndex: 1,
  },
  track: {
    height: 2,
    width: "100%",
    backgroundColor: "#A9A9A9",
    borderRadius: 8,
    position: "relative",
  },
  filled: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  thumb: {
    position: "absolute",
    top: -6,
    width: 14,
    height: 14,
    borderRadius: 8,
    backgroundColor: colors.primary,
    elevation: 2,
    zIndex: 2,
  },
});
