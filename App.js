import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Text>Header</Text>
          </View>
          <View style={styles.body}>
            <Text>Body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
