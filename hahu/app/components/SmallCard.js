import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function SmallCard({ imgurl, title, subTitle, rating, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: imgurl,
          }}
        />
        <View style={styles.description}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

        <View style={styles.ratebox}>
          <AntDesign name="star" size={12} color="#ffcd3c" />
          <Text style={styles.rate_text}>{rating}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 220,
    borderRadius: 1,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginRight: 12,
    marginVertical: 10,
  },
  description: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 11,
    bottom: 0,
    padding: 5,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
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
    top: 10,
    left: 10,
  },
  titleText: {
    fontWeight: "500",
    fontSize: 13,
    textTransform: "capitalize",
    color: "#444",
  },
  subTitle: {
    fontWeight: "bold",
    position: "absolute",
    right: 10,
    bottom: 25,
    color: "#fff",
    backgroundColor: "#000",

    padding: 7,
    minWidth: 50,
    height: 50,
    borderRadius: 35,
  },
  rate_text: {
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default SmallCard;
