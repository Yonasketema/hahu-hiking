import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Check({ title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      <AntDesign name="check" size={16} color="red" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "400",
    color: "#3339",
    textTransform: "capitalize",
    width: 140,
  },
});

export default Check;
