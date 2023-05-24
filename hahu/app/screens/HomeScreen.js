import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import SmallCard from "../components/SmallCard";
import SearchBar from "../components/SearchBar";
import SearchTagTipBox from "../components/SearchTagTipBox";
import apiClient from "../service/api-client";

const list = [
  {
    rate: 4.5,
    title: "Nature, Wildlife and Cave Church Tour",
    subTitle: "731$",
    img: "https://www.fodors.com/wp-content/uploads/2018/08/Ethiopia-Wildlife-Hero.jpg",
  },
  {
    rate: 4.8,
    title: "3 Days Omo Valley Tour",
    subTitle: "988$",
    img: "https://d2g6byanrj0o4m.cloudfront.net/images/49031/ethiopian_children.jpg",
  },
  {
    rate: 4.6,
    title: "Full Day Tour of Addis Ababa",
    subTitle: "432$",

    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/bc/5a/0a.jpg",
  },
  {
    rate: 4.9,
    title: "Lalibela 3 Days/ 2 Nights",
    subTitle: "999$",
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT26oCRGUfr9aaKIqcAHs1K6czjMHNb3f1d8e_2cCT66twqAVd7enzUnK2EKTmaJXn9",
  },
  {
    rate: 4.7,
    title: "Afar Danakil Depression",
    subTitle: "$888",
    img: "https://cdn.tourradar.com/s3/tour/1500x800/181291_4096a6f4.jpg",
  },
];

function HomeScreen() {
  const [trips, setTrips] = useState();

  useEffect(() => {
    apiClient
      .get("/trip/trips")
      .then((res) => setTrips(res.data))
      .catch((err) => console.log("Error fetching trios", err));
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
          data={list}
          keyExtractor={(item) => item.rate}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              imgurl={item.img}
              rating={item.rate}
            />
          )}
        />

        <Text style={styles.title}>Trip</Text>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ marginHorizontal: 14 }}
          numColumns={2}
          data={trips}
          keyExtractor={(item) => item.rate}
          renderItem={({ item }) => (
            <SmallCard
              title={item.title}
              subTitle={item.price}
              imgurl={
                "https://www.fodors.com/wp-content/uploads/2018/08/Ethiopia-Wildlife-Hero.jpg"
              }
              rating={"?"}
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
