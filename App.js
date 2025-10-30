import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { Header } from "./components/Header/Header";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native", isCompleted: true },
    { id: 2, title: "Build a Todo App", isCompleted: true },
    { id: 3, title: "Master Flexbox", isCompleted: false },
    { id: 4, title: "Explore React Navigation", isCompleted: false },
    { id: 5, title: "Implement State Management", isCompleted: false },
    { id: 6, title: "Test on Real Devices", isCompleted: false },
  ]);
  const [selectedTab, setSelectedTab] = useState("All");

  function getFilteredTodoList() {
    switch (selectedTab) {
      case "In Progress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "Done":
        return todoList.filter((todo) => todo.isCompleted);
      case "All":
      default:
        return todoList;
    }
  }

  function deleteTodo(todoToDelete) {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id));
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  }

  function renderTodoList() {
    return getFilteredTodoList().map((todo) => (
      <View style={styles.cardItem} key={todo.id}>
        <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedTodoList = [...todoList];
    const indexToUpdate = todoList.findIndex((item) => item.id === todo.id);
    updatedTodoList[indexToUpdate] = updatedTodo;

    setTodoList(updatedTodoList);
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
        <TabBottomMenu
          todoList={todoList}
          onPress={setSelectedTab}
          selectedTab={selectedTab}
        />
      </View>
    </>
  );
}
