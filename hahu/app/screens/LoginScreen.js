import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logo_container}>
        <Text>Login</Text>
      </View>
      <View style={styles.form_container}>
        <View style={styles.form_input}>
          <AppTextInput
            placeholder="username"
            name="username"
            autoCapitalize="none"
          />
          <AppTextInput
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            secureTextEntry
            textContentType="password"
          />
        </View>
        <AppButton title="Login" onPress={() => navigation.navigate("Home")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
  },
  logo_container: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
  },
  form_input: {
    marginVertical: 20,
  },
  form_container: {
    position: "absolute",
    bottom: 25,

    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

export default LoginScreen;
