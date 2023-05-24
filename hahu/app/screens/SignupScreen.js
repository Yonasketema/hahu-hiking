import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";
import routes from "../navigation/routes";
import { register } from "../service/api-client";

function SignupScreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <View style={styles.logo_container}>
        <Text>SignUp</Text>
      </View>
      <View style={styles.form_container}>
        <View style={styles.form_input}>
          <AppTextInput
            placeholder="username"
            name="username"
            autoCapitalize="none"
            onChangeText={(username) => setUserName(username)}
          />
          <AppTextInput
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            textContentType="emailAddress"
            onChangeText={(email) => setEmail(email)}
          />
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
        <AppButton
          title="Create Account"
          onPress={() => {
            register(username, email, password)
              .then((res) => {
                navigation.navigate(routes.LOGIN);
              })
              .catch((err) => console.log("ERROR create account", err));
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

export default SignupScreen;
