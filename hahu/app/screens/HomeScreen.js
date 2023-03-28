import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import SmallCard from "../components/SmallCard";

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
  return (
    <Screen>
      <Text style={styles.title}>plan your weekly Hiking</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",

          backgroundColor: "#fff",
          padding: 12,
        }}
      >
        <AntDesign name="search1" size={24} color="#121" />
        <TextInput
          placeholder="Search destination"
          style={{ marginHorizontal: 10 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 14,
          width: "100%",
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
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 14,
          width: "100%",
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginRight: 10 }}>
            <Card />
          </View>
          <View style={{ marginRight: 10 }}>
            <Card />
          </View>

          <View>
            <Card />
          </View>
        </ScrollView>
      </View>

      <Text style={styles.title}>Trip</Text>

      <FlatList
        numColumns={2}
        data={list}
        keyExtractor={(item) => item.rate}
        renderItem={({ item }) => (
          <SmallCard
            title={item.title}
            subTitle={item.subTitle}
            imgurl={item.img}
            rating={item.rate}
          />
        )}
      />
    </Screen>
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
  },
  text_catagory: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#444",
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  trip_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  home_screen: {
    backgroundColor: "#f8f4f8",
    flex: 1,
  },
});

export default HomeScreen;
