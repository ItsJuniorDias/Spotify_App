import { Button, TextButton } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function ButtonComponent({ title, onPress }: ButtonProps) {
  return (
    <Button onPress={onPress}>
      <TextButton>{title}</TextButton>
    </Button>
  );
}
