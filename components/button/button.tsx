import { Button, TextButton } from "./styles";

interface ButtonProps {
  title: string;
}

export function ButtonComponent({ title }: ButtonProps) {
  return (
    <Button>
      <TextButton>{title}</TextButton>
    </Button>
  );
}
