import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginSignup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful!");
      
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot <Text style={styles.linkText}>Password?</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.linkText}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 15,
    color: "#555",
  },
  signupText: {
    marginTop: 15,
    color: "#555",
  },
  linkText: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default LoginSignup;