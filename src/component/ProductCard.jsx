import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
      <Button title="Buy Now" onPress={() => navigation.navigate("Payment", { product })} />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: 160,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
});
