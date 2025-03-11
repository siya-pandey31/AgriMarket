import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";
import LoginSignup from "./LoginSignup";  // ✅ Import LoginSignup component

const Post = ({ navigation }) => {
  const { user } = useContext(AuthContext);  // ✅ Get user status

  // If user is NOT logged in, show the LoginSignup page
  if (!user) {
    return <LoginSignup />;
  }

  return (
    <View>
      <Text>Post Your Product</Text>
      <TouchableOpacity onPress={() => console.log("Post Product")}>
        <Text>Post Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;