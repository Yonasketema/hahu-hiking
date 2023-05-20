import { TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import TripDetailScreen from "../screens/TripDetailScreen";
import BookingDetailScreen from "../screens/BookingDetailScreen";
import routes from "./routes";

const popAction = StackActions.pop(1);

const Stack = createNativeStackNavigator();

const TripNavigator = () => {
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
        name={routes.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={routes.TRIP_DETAIL} component={TripDetailScreen} />
      <Stack.Screen
        name={routes.BOOKING_DETAIL}
        component={BookingDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default TripNavigator;
