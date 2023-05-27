import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Check from "../components/Check";
import AppButton from "../components/Button";
import routes from "../navigation/routes";
import apiClient from "../service/api-client";

const list = ["snack", "Water", "Transporation", "Guide"];

function TripDetailScreen({ navigation, route }) {
  const [trip, setTrip] = useState();

  const { id } = route.params;

  useEffect(() => {
    apiClient
      .get(`/api/trips/${id}`)
      .then((res) => setTrip(res.data))
      .catch((err) => console.log("Error fetching trip_detail", err));
  });

  return (
    <Screen style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ marginBottom: 60 }}
      >
        <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" />

        <View style={{ height: 370, backgroundColor: "#FFFF" }}>
          <Image
            style={styles.image}
            source={{
              uri: trip?.image_uri,
            }}
          ></Image>

          <View style={styles.trip_info}>
            <View>
              <Text style={styles.title} numberOfLines={2}>
                {trip?.title}
              </Text>
              <View style={styles.subTitle_container}>
                <Octicons name="location" size={16} color="#444" />
                <Text style={styles.subTitle}>Ethiopia ,Omo Valley </Text>
              </View>
            </View>
            <View style={styles.rateK}>
              <AntDesign name="star" size={17} color="#ffcd3c" />
              <Text style={styles.rate_text}>4.8</Text>
            </View>
          </View>
        </View>

        {/* des */}
        <View
          style={{
            marginVertical: 7,
            paddingHorizontal: 17,
            marginTop: -21,
            backgroundColor: "#fff",
            borderRadius: 21,
            paddingBottom: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View>
                <FontAwesome name="calendar" size={19} color="#9999" />
              </View>

              <View>
                <Text style={{ color: "#ccff", fontSize: 10 }}>Trip Date</Text>
                <Text style={{ color: "#777", fontSize: 12 }}>12-12-2015</Text>
              </View>
            </View>
            {/* //// /////////////////////*/}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View>
                <AntDesign name="clockcircleo" size={19} color="#999" />
              </View>

              <View>
                <Text style={{ color: "#ccff", fontSize: 10 }}>
                  Meeting Time
                </Text>
                <Text style={{ color: "#777", fontSize: 12 }}>9PM</Text>
              </View>
            </View>
            {/* ///{" /////////////////////"} */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View>
                <Octicons name="location" size={19} color="#999" />
              </View>

              <View>
                <Text style={{ color: "#ccff", fontSize: 10 }}>
                  Meeting location
                </Text>
                <Text style={{ color: "#777", fontSize: 12 }}>
                  Mexico shebela hotel
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 5,
              color: "#333",
            }}
          >
            Description
          </Text>

          <Text style={{ color: "#999" }}>{trip?.description}</Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 5,
              color: "#333",
            }}
          >
            Include
          </Text>

          <View
            style={{
              width: "100%",
            }}
          >
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{
                marginLeft: 16,
                alignSelf: "center",
              }}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              data={list}
              keyExtractor={(item) => item}
              renderItem={({ item }) => <Check title={item} />}
            />
          </View>
          {/* //////////////////////////////////////////////////////// */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 5,
              color: "#333",
            }}
          >
            Hosted by
          </Text>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                style={{ height: 60, width: 70, marginRight: 10 }}
                source={{
                  uri: "https://picsum.photos/200",
                }}
              ></Image>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginVertical: 5,
                  color: "#555",
                }}
              >
                Guzo Adwa Hiking Group
              </Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <AntDesign name="star" size={17} color="#ffcd3c" />
                <Text style={styles.rate_text}>4.8</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.booking_container}>
        <View style={styles.price_container}>
          <Text style={styles.price_text}>799$</Text>
        </View>

        <View style={styles.booking_btn_container}>
          <AppButton
            title="Book Now"
            onPress={() => navigation.navigate(routes.BOOKING_DETAIL)}
          >
            <AntDesign name="arrowright" size={21} color="#fff" />
          </AppButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  subTitle: { color: "#444" },
  subTitle_container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  rateK: {
    backgroundColor: "#1777",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  rate_text: {
    fontSize: 13,
    fontWeight: "600",
  },
  trip_info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#ffffffd0",
    position: "absolute",
    width: "86%",
    height: "20%",
    marginHorizontal: "7%",
    bottom: 30,
  },
  booking_container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: 7,
    backgroundColor: "#eee",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  price_container: {
    width: "25%",
  },
  price_text: {
    fontSize: 27,
    fontWeight: "bold",
  },
  booking_btn_container: {
    width: "70%",
  },
});
export default TripDetailScreen;
