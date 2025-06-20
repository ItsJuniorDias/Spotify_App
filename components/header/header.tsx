import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import logo from "../../assets/images/logo.png";

import { ContentLogo, ImageLogo, Button, FakeView } from "./styles";

interface ButtonProps {
  isButton?: boolean;
}

export function Header({ isButton }: ButtonProps) {
  return (
    <ContentLogo>
      {isButton ? (
        <Button>
          <SimpleLineIcons name="arrow-left" size={14} color="white" />
        </Button>
      ) : (
        <FakeView />
      )}

      <ImageLogo source={logo} />

      <FakeView />
    </ContentLogo>
  );
}
