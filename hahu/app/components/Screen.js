import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fcf2f1",
    flex: 1,
  },
  scroll_screen: {
    flex: 1,
    height: "100%",
  },
});
export default Screen;
