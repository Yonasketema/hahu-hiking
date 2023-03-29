import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function SearchTagTipBox(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 14,
        width: "100%",
        margin: 16,
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.box_catagory}>
          <Foundation name="mountains" size={27} color="#3777" />
          <Text style={styles.text_catagory}>mountains</Text>
        </View>

        <View style={styles.box_catagory}>
          <MaterialCommunityIcons name="forest" size={27} color="#3777" />
          <Text style={styles.text_catagory}>forest</Text>
        </View>

        <View style={styles.box_catagory}>
          <MaterialIcons name="location-city" size={27} color="#3777" />
          <Text style={styles.text_catagory}>Citys</Text>
        </View>

        <View style={styles.box_catagory}>
          <MaterialIcons name="location-city" size={27} color="#3777" />
          <Text style={styles.text_catagory}>Citys</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box_catagory: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    maxWidth: 130,
    gap: 9,
    height: 35,
    marginRight: 12,
    elevation: 3,
  },
  text_catagory: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#444",
  },
});

export default SearchTagTipBox;
