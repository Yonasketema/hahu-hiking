import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";

function AccountScreen({}) {
  return (
    <Screen style={styles.container}>
      <View>
        <Text>AccountScreen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
