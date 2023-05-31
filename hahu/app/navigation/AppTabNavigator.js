import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MyTripScreen from "../screens/MyTripScreen";
import AccountScreen from "../screens/AccountScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TripNavigator from "./TripNavigator";
import routes from "./routes";

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
            if (
              routeName === routes.TRIP_DETAIL ||
              routeName === routes.BOOKING_DETAIL
            ) {
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
