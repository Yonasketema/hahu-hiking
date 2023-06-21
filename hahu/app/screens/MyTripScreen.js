import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import apiClient from "../service/api-client";
import SimpleCard from "../components/SimpleCard";

function MyTripScreen() {
  const [myTrip, setMyTrip] = useState();

  useEffect(() => {
    apiClient
      .get("/api/mytrip")
      .then((res) => setMyTrip(res.data))
      .catch((err) => console.log("Error fetching myTrip", err));
  }, []);

  return (
    <Screen style={styles.container}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "500",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        myTrip
      </Text>
      <FlatList
        contentContainerStyle={{ marginHorizontal: 2 }}
        showsHorizontalScrollIndicator={false}
        data={myTrip}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { trip } }) => (
          <SimpleCard
            title={trip.title}
            image_uri={trip.image_uri}
            location={"ethiopa"}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    marginBottom: 5,
    backgroundColor: "#eee",
  },
});

export default MyTripScreen;
