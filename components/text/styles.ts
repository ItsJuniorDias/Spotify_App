import { colors } from "@/theme";
import styled from "styled-components/native";

interface TextProps {
  fontFamily: string;
  fontSize: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${colors.white};
`;
