import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppTabNavigator from "./app/navigation/AppTabNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { AuthContext } from "./app/hook/useAuth";
import authStorage from "./app/authStorage";
import apiClient, { me } from "./app/service/api-client";

export default function App() {
  const [user, setUser] = useState({
    login: false,
  });

  const restoreTokens = async () => {
    let tokens = await authStorage.getToken();
    if (!tokens) return;

    tokens = JSON.parse(tokens);

    apiClient
      .get("/auth/users/me/", {
        headers: {
          Authorization: `JWT ${tokens.access}`,
        },
      })
      .then((res) => {
        setUser({ login: true, ...res.data });
      })
      .catch((err) => console.log("Error fetching me", err.message));
  };

  useEffect(() => {
    restoreTokens();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user?.login ? <AppTabNavigator /> : <AuthNavigator />}
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
