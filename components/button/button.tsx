import { ActivityIndicator } from "react-native";
import { Button, TextButton } from "./styles";
import { colors } from "@/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

export function ButtonComponent({ title, onPress, isLoading }: ButtonProps) {
  return (
    <Button onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={16} color={colors.black} />
      ) : (
        <TextButton>{title}</TextButton>
      )}
    </Button>
  );
}
