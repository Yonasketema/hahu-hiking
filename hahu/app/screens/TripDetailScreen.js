import React from "react";

import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import Screen from "../components/Screen";

function TripDetailScreen(props) {
  return (
    <Screen>
      <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" />

      <View style={{ height: "50%" }}>
        <Image
          style={styles.image}
          source={{
            uri: "https://d2g6byanrj0o4m.cloudfront.net/images/49031/ethiopian_children.jpg",
          }}
        ></Image>

        <View style={styles.trip_info}>
          <View>
            <Text style={styles.title}>3 Days Omo Valley Tour</Text>
            <View style={styles.subTitle_container}>
              <Octicons name="location" size={16} color="#888" />
              <Text style={styles.subTitle}>Ethiopia ,Omo Valley </Text>
            </View>
          </View>
          <View style={styles.rateK}>
            <AntDesign name="star" size={17} color="#ffcd3c" />
            <Text style={styles.rate_text}>4.8</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },

  subTitle: { color: "#7777" },
  subTitle_container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  rateK: {
    // backgroundColor: "#1777",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  rate_text: {
    fontSize: 13,
    fontWeight: "600",
  },
  trip_info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    position: "absolute",
    width: "86%",
    height: "20%",
    marginHorizontal: "7%",
    bottom: 30,
  },
});
export default TripDetailScreen;
