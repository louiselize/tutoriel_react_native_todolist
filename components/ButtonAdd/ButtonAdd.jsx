import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonAdd.style";

export function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.buttonAdd}>
      <Text style={styles.plusSign}>+</Text>
    </TouchableOpacity>
  );
}
