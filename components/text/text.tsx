import { Text } from "./styles";

export interface TextProps {
  testID?: string;
  title: string;
  fontFamily: "bold" | "regular" | "semi-bold";
  fontSize: 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32;
}

export function TextCustom({ testID, title, fontFamily, fontSize }: TextProps) {
  const objectFont = {
    bold: "Montserrat-Bold",
    regular: "Montserrat-Regular",
    "semi-bold": "Montserrat-SemiBold",
  };

  return (
    <Text
      testID={testID}
      fontFamily={objectFont[fontFamily]}
      fontSize={fontSize}
    >
      {title}
    </Text>
  );
}
