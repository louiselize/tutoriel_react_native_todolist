import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TabBottomMenu.style";
export function TabBottomMenu({ selectedTab, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      fontSize: 15,
      color: selectedTab === tabName ? "#2F76E5" : "black",
    };
  }
  const tabNames = {
    ALL: "All",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
  };

  return (
    <View style={styles.tabBottomMenu}>
      <TouchableOpacity onPress={() => onPress(tabNames.ALL)}>
        <Text style={getTextStyle(tabNames.ALL)}>{tabNames.ALL}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(tabNames.IN_PROGRESS)}>
        <Text style={getTextStyle(tabNames.IN_PROGRESS)}>
          {tabNames.IN_PROGRESS}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(tabNames.DONE)}>
        <Text style={getTextStyle(tabNames.DONE)}>{tabNames.DONE}</Text>
      </TouchableOpacity>
    </View>
  );
}
