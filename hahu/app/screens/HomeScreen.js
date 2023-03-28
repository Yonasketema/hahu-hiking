import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

import { Foundation } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import SmallCard from "../components/SmallCard";

function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>plan your weekly Hiking</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",

          backgroundColor: "#fff",
          padding: 12,
        }}
      >
        <AntDesign name="search1" size={24} color="#121" />
        <TextInput
          placeholder="Search destination"
          style={{ marginHorizontal: 10 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 14,
          width: "100%",
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginRight: 10 }}>
            <Card />
          </View>

          <View>
            <Card />
          </View>
        </ScrollView>
      </View>

      <Text style={styles.title}>Trip</Text>

      <View style={styles.trip_container}>
        <SmallCard />
        <SmallCard />
      </View>

      <View style={styles.trip_container}>
        <SmallCard />
        <SmallCard />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  box_catagory: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: 130,
    height: 35,
    marginRight: 12,
  },
  text_catagory: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#444",
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  trip_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  home_screen: {
    backgroundColor: "#f8f4f8",
    flex: 1,
  },
});

export default HomeScreen;
