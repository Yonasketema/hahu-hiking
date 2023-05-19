import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MyTripScreen from "../screens/MyTripScreen";
import AccountScreen from "../screens/AccountScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TripNavigator from "./TripNavigator";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={TripNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName === "TripDetail" || routeName === "bookingDetail") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Mytrips"
        component={MyTripScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
