import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/context/AuthContext";  
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import LoginSignup from "./src/screens/LoginSignup";
import Market from "./src/screens/Market";
import Post from "./src/screens/Post";
import Payment from './src/screens/PaymentScreen';
import { StripeProvider } from "@stripe/stripe-react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51R1MuRI6cYqqPKIu..." >
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          <Stack.Screen name="Market" component={Market} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
    </StripeProvider>
  );
};

export default App;