import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import Dialog from "react-native-dialog";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import { styles } from "./App.style";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { Header } from "./components/Header/Header";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [inputAddTodo, setInputAddTodo] = useState("");

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

  function showAddDialog() {
    setIsAddDialogVisible(true);
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputAddTodo,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddDialogVisible(false);
    setInputAddTodo("");
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
          <ButtonAdd onPress={showAddDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <TabBottomMenu
          todoList={todoList}
          onPress={setSelectedTab}
          selectedTab={selectedTab}
        />
      </View>
      <Dialog.Container
        visible={isAddDialogVisible}
        onBackdropPress={() => setIsAddDialogVisible(false)}>
        <Dialog.Title>Add New Todo</Dialog.Title>
        <Dialog.Input
          placeholder="Enter todo title"
          onChangeText={(text) => {
            setInputAddTodo(text);
          }}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setIsAddDialogVisible(false);
          }}
        />
        <Dialog.Button
          label="Add"
          disabled={inputAddTodo.trim() === ""}
          onPress={() => {
            addTodo();
          }}
        />
      </Dialog.Container>
    </>
  );
}
