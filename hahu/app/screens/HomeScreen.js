import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>plan your weekly Hiking</Text>
      <Card />

      <Text style={styles.title}>Trip</Text>

      <View style={styles.trip_container}>
        <Card style={{ width: "48%", height: 220 }} />
        <Card style={{ width: "48%", height: 220 }} />
      </View>

      <View style={styles.trip_container}>
        <Card style={{ width: "48%", height: 220 }} />
        <Card style={{ width: "48%", height: 220 }} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  trip_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  home_screen: {
    backgroundColor: "#f8f4f8",
    flex: 1,
  },
});

export default HomeScreen;
