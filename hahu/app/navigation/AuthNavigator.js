import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import routes from "./routes";
import IntroScreen from "../screens/IntroScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
    }}
  >
    <Stack.Screen
      name={routes.INTRO}
      component={IntroScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={routes.SIGNUP} component={SignupScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
