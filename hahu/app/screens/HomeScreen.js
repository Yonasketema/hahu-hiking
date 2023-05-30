import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import SmallCard from "../components/SmallCard";
import SearchBar from "../components/SearchBar";
import SearchTagTipBox from "../components/SearchTagTipBox";
import apiClient from "../service/api-client";
import routes from "../navigation/routes";

function HomeScreen({ navigation }) {
  const [trips, setTrips] = useState();
  const [weeklyhikes, setWeeklyHikes] = useState();

  useEffect(() => {
    apiClient
      .get("/api/trips")
      .then((res) => setTrips(res.data))
      .catch((err) => console.log("Error fetching trios", err));

    apiClient
      .get("/api/hikings")
      .then((res) => setWeeklyHikes(res.data))
      .catch((err) => console.log("Error fetching hikes", err));
  }, []);

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <Text style={styles.title}>plan your weekly Hiking</Text>

        <SearchBar />

        <SearchTagTipBox />

        <Text style={styles.title}>weekly Hiking</Text>

        <FlatList
          contentContainerStyle={{ marginHorizontal: 16, paddingRight: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={weeklyhikes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              imgurl={item.image_uri}
              rating={"?"}
              onPress={() =>
                navigation.navigate(routes.TRIP_DETAIL, {
                  url: `hikings/${item.id}`,
                })
              }
            />
          )}
        />

        <Text style={styles.title}>Trip</Text>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ marginHorizontal: 14 }}
          numColumns={2}
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SmallCard
              title={item.title}
              subTitle={item.price}
              imgurl={item.image_uri}
              rating={"?"}
              onPress={() =>
                navigation.navigate(routes.TRIP_DETAIL, {
                  url: `trips/${item.id}`,
                })
              }
            />
          )}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 16,
    marginVertical: 10,
  },
  trip_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
});

export default HomeScreen;
