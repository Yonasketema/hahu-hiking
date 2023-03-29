import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

function SearchBar(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#fff",
        padding: 12,
        marginHorizontal: "5%",
      }}
    >
      <AntDesign name="search1" size={24} color="#121" />
      <TextInput
        placeholder="Search destination"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
}

export default SearchBar;
