import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./app/screens/HomeScreen";
import TripDetailScreen from "./app/screens/TripDetailScreen";
import BookingDetailScreen from "./app/screens/BookingDetailScreen";
import { StackActions } from "@react-navigation/native";
import MyTripScreen from "./app/screens/MyTripScreen";
import LoginScreen from "./app/screens/LoginScreen";

const popAction = StackActions.pop(1);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  const navigate = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerTransparent: true,
        headerShadowVisible: false,

        headerBackVisible: false,
        headerTitleAlign: "center",

        headerLeft: () => (
          <TouchableWithoutFeedback
            onPress={() => navigate.dispatch(popAction)}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color="#333"
              style={{ backgroundColor: "#eee", padding: 4, borderRadius: 50 }}
            />
          </TouchableWithoutFeedback>
        ),
        headerRight: () => (
          <Ionicons
            name="ios-notifications-outline"
            size={24}
            color="black"
            style={{ backgroundColor: "#eee", padding: 4, borderRadius: 50 }}
          />
        ),
      }}
    >
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
};

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
      <Tab.Screen
        name="Explore"
        component={StackNavigator}
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
        name="My trips"
        component={MyTripScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    // <NavigationContainer>
    //   {/* <StackNavigator />
    //    */}
    //   <TabNavigator />
    // </NavigationContainer>
    <LoginScreen />
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
