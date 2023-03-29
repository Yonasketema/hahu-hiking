import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Card({ style, imgurl, title, subTitle, rating }) {
  return (
    <View style={[styles.card, style]}>
      <Image
        style={styles.img}
        source={{
          uri: imgurl,
        }}
      />
      <View style={styles.description}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.info}>
          <Text style={styles.info_title}>Addis Hiking</Text>
          <Text style={styles.info_subTitle}>{subTitle}</Text>
        </View>
      </View>

      <View style={styles.ratebox}>
        <AntDesign name="star" size={17} color="#ffcd3c" />
        <Text style={styles.rate_text}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderRadius: 1,
    width: 221,
    height: 290,
    backgroundColor: "#fff",
    marginRight: 12,
  },
  description: {
    paddingHorizontal: 7,
  },
  img: {
    width: "100%",
    height: "72%",
    borderRadius: 1,
    marginBottom: 10,
  },
  ratebox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    position: "absolute",
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    top: 25,
    left: 25,
  },
  titleText: {
    fontWeight: "500",
    fontSize: 15,

    textTransform: "capitalize",
    marginBottom: 3,
  },
  rate_text: {
    fontWeight: "bold",
    fontSize: 14,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info_title: {
    color: "#888",
    fontSize: 13,
    fontWeight: "500",
  },
  info_subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Card;
