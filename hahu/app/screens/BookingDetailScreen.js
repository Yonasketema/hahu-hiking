import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Screen from "../components/Screen";
import ShowCard from "../components/ShowCard";

function BookingDetailScreen({ route }) {
  const { trip } = route.params;

  return (
    <Screen style={styles.container}>
      <ShowCard
        title={trip.title}
        image_uri={trip.image_uri}
        location={"ethiopia"}
        borderStyle="dashed"
      />

      <View style={styles.booking_info_container}>
        <Text style={styles.title}>Number Of People</Text>
        <TextInput
          style={styles.number_input}
          keyboardType={"numeric"}
          value="1"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeddff",
    paddingTop: 45,
    paddingHorizontal: 9,
  },
  booking_info_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 21,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#999",
  },
  number_input: {
    textAlign: "center",
    height: 40,
    width: 66,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#009688",
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default BookingDetailScreen;
