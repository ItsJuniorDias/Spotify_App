import { Text } from "./styles";

interface TextProps {
  title: string;
  fontFamily: "bold" | "regular" | "semi-bold";
  fontSize: 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32;
}

export function TextCustom({ title, fontFamily, fontSize }: TextProps) {
  const objectFont = {
    bold: "Montserrat-Bold",
    regular: "Montserrat-Regular",
    "semi-bold": "Montserrat-SemiBold",
  };

  return (
    <Text fontFamily={objectFont[fontFamily]} fontSize={fontSize}>
      {title}
    </Text>
  );
}
