import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import authStorage from "../authStorage";
import useAuth from "../hook/useAuth";

function AccountScreen({}) {
  const { setUser } = useAuth();
  const handleLogOut = () => {
    authStorage.removeTokens();
    setUser(null);
  };
  return (
    <Screen style={styles.container}>
      <View>
        <Text>AccountScreen</Text>
        <Button title="Logout" onPress={handleLogOut} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
