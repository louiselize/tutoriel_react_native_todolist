import { Image, Text, TouchableOpacity } from "react-native";
import checkImage from "../../assets/check.png";
import { styles } from "./CardTodo.style";

export function CardTodo({ todo, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(todo)} style={styles.card}>
      <Text
        style={[
          styles.text,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}>
        {todo.title}
      </Text>
      {todo.isCompleted && (
        <Image style={styles.image} source={checkImage}></Image>
      )}
    </TouchableOpacity>
  );
}
