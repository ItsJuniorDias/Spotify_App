import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import logo from "../../assets/images/logo.png";
import icon_search from "../../assets/images/icon_search.png";
import icon_settings from "../../assets/images/icon_settings.png";

import { ContentLogo, Icon, ImageLogo, Button, FakeView } from "./styles";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  isButton?: boolean;
  onPress?: () => void;
  onPressSearch?: () => void;
  onPressSettings?: () => void;
}

export function Header({
  isButton,
  onPress,
  onPressSearch,
  onPressSettings,
}: ButtonProps) {
  return (
    <ContentLogo>
      {isButton ? (
        <Button onPress={onPress}>
          <SimpleLineIcons name="arrow-left" size={14} color="white" />
        </Button>
      ) : (
        <>
          {onPressSearch ? (
            <TouchableOpacity onPress={onPressSearch}>
              <Icon source={icon_search} />
            </TouchableOpacity>
          ) : (
            <FakeView />
          )}
        </>
      )}

      <ImageLogo source={logo} />

      {onPressSettings ? (
        <TouchableOpacity onPress={onPressSearch}>
          <Icon source={icon_settings} />
        </TouchableOpacity>
      ) : (
        <FakeView />
      )}
    </ContentLogo>
  );
}
