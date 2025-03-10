import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/context/AuthContext";  // ✅ Import AuthProvider
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import LoginSignup from "./src/screens/LoginSignup";
import Market from "./src/screens/Market";
import Post from "./src/screens/Post";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          <Stack.Screen name="Market" component={Market} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
