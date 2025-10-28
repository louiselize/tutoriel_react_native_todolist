import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { Header } from "./components/Header/Header";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native", isCompleted: true },
    { id: 2, title: "Build a Todo App", isCompleted: true },
    { id: 3, title: "Master Flexbox", isCompleted: false },
    { id: 4, title: "Explore React Navigation", isCompleted: false },
    { id: 5, title: "Implement State Management", isCompleted: false },
    { id: 6, title: "Test on Real Devices", isCompleted: false },
  ]);
  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={styles.cardItem} key={todo.id}>
        <CardTodo todo={todo} />
      </View>
    ));
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
