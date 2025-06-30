import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { SymbolWeight, SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "play.fill": "playlist-play",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
} as IconMapping;

export function IconSymbol({
  testID,
  name,
  size = 24,
  color,
  style,
}: {
  testID?: string;
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      testID={testID}
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
