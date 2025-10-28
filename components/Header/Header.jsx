import { Image, Text } from "react-native";
import headerLogo from "../../assets/logo.png";
import { styles } from "./Header.style";
export function Header() {
  return (
    <>
      <Image style={styles.image} source={headerLogo} />
      <Text style={styles.subtitle}>Tu as probablement un truc à faire!</Text>
    </>
  );
}
