import React from "react";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

import SmallCard from "../components/SmallCard";
import SearchBar from "../components/SearchBar";
import SearchTagTipBox from "../components/SearchTagTipBox";

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

const hilist = [
  {
    rate: 4.5,
    title: "Hiking trip to Ensaro ",
    subTitle: "111$",
    img: "https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/336717325_881127906287086_2471953286414293879_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=BDeXIscjqikAX_q86X3&_nc_ht=scontent.fadd2-1.fna&oh=00_AfCMSicVyIcpQYf9dsIYkm0S72ckUykmb445SemOuoM5wA&oe=64286C09",
  },
  {
    rate: 4.8,
    title: "Camping and Hiking Trip to Langano",
    subTitle: "988$",
    img: "https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/332377073_6762784677081485_4822326577945761217_n.jpg?stp=cp6_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3I9f3yXiGhgAX_ekrvl&_nc_ht=scontent.fadd2-1.fna&oh=00_AfCv0uR_hCJkti34X5DSk3tdzu5G6nU2sHcONcrVl44iQg&oe=642824A3",
  },
  {
    rate: 4.9,
    title: "DAY TRIP TO Wenchi Crater Lake!",
    subTitle: "432$",

    img: "https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/321823370_488476400063030_7840182495189301720_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VgYLL485e6UAX-0eISl&_nc_ht=scontent.fadd2-1.fna&oh=00_AfBfj3XaFMYZF94SBScmTilZNEylwuM6R807rPuLaPmCDQ&oe=64291212",
  },
];

function HomeScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <Text style={styles.title}>plan your weekly Hiking</Text>

        <SearchBar />

        <SearchTagTipBox />

        <FlatList
          contentContainerStyle={{ marginLeft: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hilist}
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
          contentContainerStyle={{ margin: 14 }}
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
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
});

export default HomeScreen;
