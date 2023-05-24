import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppButton from "../components/Button";
import AppTextInput from "../components/AppTextInput";
import authStorage from "../authStorage";
import Screen from "../components/Screen";
import { login } from "../service/api-client";
import useAuth from "../hook/useAuth";

function LoginScreen() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, user } = useAuth();

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
            onChangeText={(username) => setUserName(username)}
          />
          <View>
            <AppTextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              secureTextEntry
              textContentType="password"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </View>
        <AppButton
          title="Login"
          onPress={() => {
            login(username, password)
              .then((res) => {
                authStorage.storeTokens(JSON.stringify(res.data));
                setUser({ ...user, login: true });
              })
              .catch((err) => console.log(err.message));
          }}
        />
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
