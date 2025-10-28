import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { Header } from "./components/Header/Header";

const TODO_LIST = [
  { id: 1, title: "Learn React Native", isCompleted: true },
  { id: 2, title: "Build a Todo App", isCompleted: true },
  { id: 3, title: "Master Flexbox", isCompleted: false },
  { id: 4, title: "Explore React Navigation", isCompleted: false },
];
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <CardTodo todo={TODO_LIST[0]} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
