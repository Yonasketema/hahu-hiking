import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/Button";
import routes from "../navigation/routes";

function IntroScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logo_container}>
        <Text>Welcome</Text>
      </View>
      <View style={styles.form_container}>
        <AppButton
          title="Create Account"
          onPress={() => {
            navigation.navigate(routes.SIGNUP);
          }}
        />
        <AppButton
          title="Login"
          onPress={() => {
            navigation.navigate(routes.LOGIN);
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
  form_container: {
    height: 150,
    marginVertical: 20,
    position: "absolute",
    width: "100%",
    bottom: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default IntroScreen;
