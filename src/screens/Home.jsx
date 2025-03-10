import React from "react";
import { 
  View, Text, TouchableOpacity, StyleSheet, ImageBackground 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require("../assets/HomeBG.png")} // Change this to your background image
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.logo}>AgriMarket</Text>
          <TouchableOpacity 
            style={styles.signupButton} 
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Welcome to AgriMarket</Text>
        <Text style={styles.subText}>Connecting Farmers & Buyers Directly</Text>

        {/* Buttons Section */}
        <TouchableOpacity style={[styles.button, { backgroundColor: "#4CAF50" }]} onPress={() => navigation.navigate("Market")}>
          <Text style={styles.buttonText}>Browse Markets</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "#FF9800" }]} onPress={() => navigation.navigate("Post")}>
          <Text style={styles.buttonText}>Post Your Product</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "#2196F3" }]} onPress={() => navigation.navigate("Orders")}>
          <Text style={styles.buttonText}>View Your Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "#9C27B0" }]} onPress={() => navigation.navigate("ESP32")}>
          <Text style={styles.buttonText}>Connect to ESP32-CAM</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adds a semi-transparent overlay
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  signupButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    elevation: 5, // Adds a shadow effect
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Home;
