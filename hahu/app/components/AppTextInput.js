import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={"red"}
          style={styles.icon}
        />
      )}
      <TextInput
        style={{
          color: "#000",
          fontSize: 18,
          width: "100%",
          fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeee",
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
