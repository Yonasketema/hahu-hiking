import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{
          uri: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT26oCRGUfr9aaKIqcAHs1K6czjMHNb3f1d8e_2cCT66twqAVd7enzUnK2EKTmaJXn9",
        }}
      />
      <View style={styles.description}>
        <Text style={styles.titleText}>Lalibela</Text>
        <Text style={styles.subTitle}>55 $</Text>
      </View>

      <View style={styles.ratebox}>
        <AntDesign name="star" size={24} color="#ffcd3c" />
        <Text style={styles.rate_text}>4.8</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 16,
    width: 221,
    height: 277,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: "78%",
    borderRadius: 16,
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
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  rate_text: {
    fontWeight: "bold",
  },
});

export default Card;
