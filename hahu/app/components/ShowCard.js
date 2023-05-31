import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

function ShowCard({ image_uri, title, location, borderStyle = "solid" }) {
  return (
    <View
      style={[
        styles.show_container,
        {
          borderStyle,
        },
      ]}
    >
      <View>
        <Image
          style={styles.image_container}
          source={{
            uri: image_uri,
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.location_container}>
          <Octicons name="location" size={15} color="#555" />
          <Text style={styles.location_text}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  show_container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    padding: 14,
    marginHorizontal: 14,
  },
  image_container: {
    height: 100,
    width: 100,
    marginRight: 20,
    borderRadius: 7,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    marginVertical: 5,
    color: "#555",
  },

  location_container: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 7,
    gap: 5,
  },
  location_text: {
    fontSize: 16,
    color: "#555",
  },
});

export default ShowCard;
