import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";

function MyTripScreen() {
  return (
    <Screen style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            marginVertical: 5,
            color: "#333",
            marginHorizontal: 12,
          }}
        >
          Your Next Trip
        </Text>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: 12,
            marginHorizontal: 12,
          }}
        >
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
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MyTripScreen;
