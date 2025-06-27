import { ActivityIndicator } from "react-native";
import { Button, TextButton } from "./styles";
import { colors } from "@/theme";

interface ButtonProps {
  testID?: string;
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

export function ButtonComponent({
  testID,
  title,
  onPress,
  isLoading,
}: ButtonProps) {
  return (
    <Button testID={testID} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={16} color={colors.black} />
      ) : (
        <TextButton>{title}</TextButton>
      )}
    </Button>
  );
}
