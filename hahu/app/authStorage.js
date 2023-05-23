import * as SecureStore from "expo-secure-store";

const authKey = "authTokens";

const storeTokens = async (authToken) => {
  try {
    await SecureStore.setItemAsync(authKey, authToken);
  } catch (error) {
    console.error("Error sotre token error", error);
  }
};

const getToken = async () => {
  try {
    return (authTokens = await SecureStore.getItemAsync(authKey));
  } catch (error) {
    console.error("Error  getting token", error);
  }
};

const removeTokens = async () => {
  try {
    await SecureStore.deleteItemAsync(authKey);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { storeTokens, getToken, removeTokens };
