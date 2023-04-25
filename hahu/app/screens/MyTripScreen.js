import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";

function MyTripScreen() {
  return (
    <Screen style={styles.container}>
      <View>
        <Text>MyTripScreen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

export default MyTripScreen;
