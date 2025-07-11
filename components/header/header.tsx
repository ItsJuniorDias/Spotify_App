import { TouchableOpacity } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import logo from "../../assets/images/logo.png";
import icon_search from "../../assets/images/icon_search.png";
import icon_settings from "../../assets/images/icon_settings.png";

import {
  ContentLogo,
  Icon,
  ImageLogo,
  Title,
  Button,
  FakeView,
} from "./styles";

interface HeaderProps {
  testID?: string;
  title?: string;
  isButton?: boolean;
  onPress?: () => void;
  onPressSearch?: () => void;
  onPressSettings?: () => void;
}

export function Header({
  testID,
  title,
  isButton,
  onPress,
  onPressSearch,
  onPressSettings,
}: HeaderProps) {
  return (
    <ContentLogo>
      {isButton ? (
        <Button testID={testID} onPress={onPress}>
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

      {title ? <Title>{title}</Title> : <ImageLogo source={logo} />}

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
