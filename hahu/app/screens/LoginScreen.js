import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";

function Login() {
  return (
    <Screen style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

export default Login;
