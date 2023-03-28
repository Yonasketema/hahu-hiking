import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function SmallCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT26oCRGUfr9aaKIqcAHs1K6czjMHNb3f1d8e_2cCT66twqAVd7enzUnK2EKTmaJXn9",
        }}
      />
      <View style={styles.description}>
        <Text style={styles.subTitle}>555 $</Text>
        <Text style={styles.titleText}>Lalibela</Text>
      </View>

      <View style={styles.ratebox}>
        <AntDesign name="star" size={12} color="#ffcd3c" />
        <Text style={styles.rate_text}>4.8</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 220,
    borderRadius: 16,
    borderColor: "#9777",
    borderWidth: 2,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  description: {
    height: 50,
    width: "90%",
    borderTopRightRadius: 75,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 5,
  },
  img: {
    width: "100%",
    height: "100%",
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
    top: 10,
    left: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "capitalize",
  },
  rate_text: {
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default SmallCard;
