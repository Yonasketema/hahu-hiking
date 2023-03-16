import React from "react";
import { View, StyleSheet, Image } from "react-native";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} />
      <View style={styles.description}>
        <Text>title</Text>
        <Text>location</Text>
      </View>

      <View style={styles.ratebox}>
        <Text>4.8</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Card;
