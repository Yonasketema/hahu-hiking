import React from "react";
import { Text, View } from "react-native";
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
      <AntDesign name="check" size={16} color="#1116" />
      <Text style={{ fontSize: 18, fontWeight: "600", color: "#3339" }}>
        {title}
      </Text>
    </View>
  );
}

export default Check;
