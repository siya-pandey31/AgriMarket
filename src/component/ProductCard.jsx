import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      {/* Discount Badge */}
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{product.discount}% OFF</Text>
      </View>

      {/* Product Image */}
      <Image source={product.image} style={styles.productImage} />

      {/* Product Name */}
      <Text style={styles.productName} numberOfLines={2}>
        {product.name}
      </Text>

      {/* Weight & Rating */}
      <Text style={styles.productWeight}>{product.weight}</Text>
      <Text style={styles.rating}>⭐ {product.rating} ({product.reviews})</Text>

      {/* Price Section */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{product.price}</Text>
        <Text style={styles.oldPrice}>₹{product.oldPrice}</Text>
      </View>
      <Text style={styles.discount}>Discount: ₹{product.discountAmount}</Text>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyButton} onPress={() => alert("Buy Now Clicked!")}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "47%", 
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  discountBadge: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#FF5722",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  discountText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  productImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  productWeight: {
    fontSize: 12,
    color: "#666",
  },
  rating: {
    fontSize: 12,
    color: "#FFD700",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  oldPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: 5,
  },
  discount: {
    fontSize: 12,
    color: "#D32F2F",
    marginBottom: 5,
  },
  buyButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductCard;
