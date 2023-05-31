import React from "react";
import { StyleSheet } from "react-native";

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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeddff",
    paddingTop: 45,
  },
});

export default BookingDetailScreen;
