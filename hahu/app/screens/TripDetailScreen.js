import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppButton from "../components/Button";
import routes from "../navigation/routes";
import apiClient from "../service/api-client";

function TripDetailScreen({ navigation, route }) {
  const [trip, setTrip] = useState();

  const { url } = route.params;

  useEffect(() => {
    apiClient
      .get(`/api/${url}`)
      .then((res) => setTrip(res.data))
      .catch((err) => console.log("Error fetching trip_detail", err));
  }, []);

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
          </View>
        </View>

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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 11,
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
              marginVertical: 11,
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
          <Text style={styles.price_text}>{trip?.price}$</Text>
        </View>

        <View style={styles.booking_btn_container}>
          <AppButton
            title="Book Now"
            onPress={() =>
              navigation.navigate(routes.BOOKING_DETAIL, { trip, url })
            }
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
    backgroundColor: "#FFF",
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
    width: "30%",
  },
  price_text: {
    fontSize: 23,
    fontWeight: "bold",
  },
  booking_btn_container: {
    width: "70%",
  },
});
export default TripDetailScreen;
