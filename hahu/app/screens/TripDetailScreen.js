import React from "react";

import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import Check from "../components/Check";

const list = ["snack", "Water", "Transporation", "Guide"];

function TripDetailScreen(props) {
  return (
    <Screen>
      <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" />

      <View style={{ height: "50%", elevation: 7, backgroundColor: "#FFFF" }}>
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
              <Octicons name="location" size={16} color="#444" />
              <Text style={styles.subTitle}>Ethiopia ,Omo Valley </Text>
            </View>
          </View>
          <View style={styles.rateK}>
            <AntDesign name="star" size={17} color="#ffcd3c" />
            <Text style={styles.rate_text}>4.8</Text>
          </View>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ marginLeft: 16 }}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Check title={item} />}
      />

      <View style={styles.booking_container}>
        <View
          style={{
            width: "25%",
          }}
        >
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
            }}
          >
            799$
          </Text>
        </View>

        <View
          style={{
            width: "70%",
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "blue" }]}
          >
            <Text style={styles.text}>Book</Text>
          </TouchableOpacity>
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

  subTitle: { color: "#444" },
  subTitle_container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  rateK: {
    backgroundColor: "#1777",
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
    backgroundColor: "#ffffffd0",
    position: "absolute",
    width: "86%",
    height: "20%",
    marginHorizontal: "7%",
    bottom: 30,
  },
  //

  button: {
    backgroundColor: "#121",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    elevation: 7,
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  booking_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginVertical: 10,
  },
});
export default TripDetailScreen;
