import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigator from "./app/navigation/AppTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
});
