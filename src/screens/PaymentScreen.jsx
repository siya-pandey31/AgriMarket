import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Linking } from "react-native";

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: "Pure Set",
          price: 135, 
        }),
      });

      const session = await response.json();
      const checkoutUrl = `https://checkout.stripe.com/pay/${session.id}`;

      
      await Linking.openURL(checkoutUrl);
    } catch (error) {
      console.error("Payment Error:", error);
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Proceed to Pay</Text>
      <TouchableOpacity
        onPress={handlePayment}
        style={{
          marginTop: 20,
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 10,
        }}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "#fff", fontSize: 18 }}>Pay $135</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
