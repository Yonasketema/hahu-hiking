import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <View>
        <Text>LoginScreen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

export default LoginScreen;
