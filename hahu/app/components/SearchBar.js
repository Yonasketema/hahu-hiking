import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#121" />
      <TextInput placeholder="Search destination" style={styles.input_field} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "92%",
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: "5%",
  },
  input_field: {
    marginHorizontal: 10,
  },
});

export default SearchBar;
