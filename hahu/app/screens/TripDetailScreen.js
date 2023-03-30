import React from "react";

import { StyleSheet, View, Image, Text, StatusBar } from "react-native";

import Screen from "../components/Screen";

function TripDetailScreen(props) {
  return (
    <Screen>
      <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" />

      <Image
        style={styles.image}
        source={{
          uri: "https://d2g6byanrj0o4m.cloudfront.net/images/49031/ethiopian_children.jpg",
        }}
      ></Image>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "55%",
  },
});
export default TripDetailScreen;
