import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppTabNavigator from "./app/navigation/AppTabNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { AuthContext } from "./app/hook/useAuth";
import authStorage from "./app/authStorage";

export default function App() {
  const [user, setUser] = useState();

  const restoreTokens = async () => {
    const tokens = await authStorage.getToken();
    console.log(tokens);
    if (!tokens) return;
    setUser(JSON.stringify(tokens));
  };

  useEffect(() => {
    restoreTokens();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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
