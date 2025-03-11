import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "../component/ProductCard"; // Ensure correct case
import mustard from "../assets/mustard.png"; // Use correct image extensions
import watermelon from "../assets/watermelon.png";
import moringa from "../assets/moringa.png";
import onion from "../assets/onion.png"; // Ensure consistent naming

const products = [
  {
    id: "1",
    name: "Gentex Hybrid Black Color Mustard Seeds HD 3031",
    weight: "2.50 kg",
    price: 1940,
    oldPrice: 2540,
    discount: 24,
    discountAmount: 600,
    rating: 5.0,
    reviews: 2,
    image: mustard,
  },
  {
    id: "2",
    name: "Gentex Hybrid HD-3041 Mustard Seeds",
    weight: "2.50 kg",
    price: 2030,
    oldPrice: 2620,
    discount: 23,
    discountAmount: 590,
    rating: 5.0,
    reviews: 3,
    image: watermelon,
  },
  {
    id: "3",
    name: "Gentex Nasik Red (N-53) Onion Seeds",
    weight: "500 gm",
    price: 622,
    oldPrice: 840,
    discount: 26,
    discountAmount: 218,
    rating: 4.3,
    reviews: 4,
    image: onion, // Fixed incorrect variable name
  },
  {
    id: "4",
    name: "Sagar King Plus F1 Hybrid Watermelon Seeds",
    weight: "50 gm",
    price: 1775,
    oldPrice: 2300,
    discount: 23,
    discountAmount: 525,
    rating: 5.0,
    reviews: 1,
    image: moringa,
  },
];

const Market = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse the Market</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
});