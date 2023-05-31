import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import Screen from "../components/Screen";
import ShowCard from "../components/ShowCard";

function BookingDetailScreen({ route }) {
  const { trip } = route.params;

  const [date, setDate] = useState(new Date());
  const [showCalander, setShowCalander] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowCalander(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowCalander(true);
  };

  return (
    <Screen style={styles.container}>
      <ShowCard
        title={trip.title}
        image_uri={trip.image_uri}
        location={"ethiopia"}
        borderStyle="dashed"
      />

      <View style={styles.booking_info_container}>
        {showCalander && (
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            display="calendar"
            onChange={onChange}
          />
        )}

        <TouchableWithoutFeedback onPress={showDatepicker}>
          <View style={styles.calendar_container}>
            <FontAwesome name="calendar" size={18} color={"#000"} />
            <Text style={styles.date_text}>{date.toDateString()} </Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.number_info}>
          <Text style={styles.title}>Number Of People</Text>
          <TextInput
            style={styles.number_input}
            keyboardType={"numeric"}
            value="1"
          />
        </View>
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
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: "#fff",
  },
  number_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 21,
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
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#009688",
    fontSize: 19,
    fontWeight: "bold",
  },
  calendar_container: {
    marginVertical: 17,
    marginBottom: 25,
    backgroundColor: "#eedd",
    padding: 13,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderRadius: 7,
  },
  date_text: {
    fontSize: 17,
  },
});

export default BookingDetailScreen;
