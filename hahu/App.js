import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";
import TripDetailScreen from "./app/screens/TripDetailScreen";
import BookingDetailScreen from "./app/screens/BookingDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="TripDetail" component={TripDetailScreen} />
    <Stack.Screen name="bookingDetail" component={BookingDetailScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "#000",

        // tabBarStyle: { display: "none" },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Booked" component={TripDetailScreen} />
      <Tab.Screen
        name="HomeBot"
        component={StackNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
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
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator />
       */}
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
});
