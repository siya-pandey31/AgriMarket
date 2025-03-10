import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/HomeBG.png')} style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#2e7d32" />

      <View style={styles.navbar}>
        <Image source={require('../assets/FarmerLogo.png')} style={styles.logo} />
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("Market")} style={styles.navButton}>
            <Text style={styles.navText}>Market</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.navButton}>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to AgriMarket</Text>
        <Text style={styles.subtitle}>Connecting Farmers & Buyers Directly</Text>

        <AnimatedTouchable onPress={() => navigation.navigate("Market")} colors={['#4CAF50', '#2E7D32']} text="Browse Markets" />
        <AnimatedTouchable onPress={() => navigation.navigate("PostProduce")} colors={['#FF9800', '#E65100']} text="Post Your Product" />
        <AnimatedTouchable onPress={() => navigation.navigate("Orders")} colors={['#2196F3', '#0D47A1']} text="View Your Orders" />
      </View>
    </ImageBackground>
  );
};

const AnimatedTouchable = ({ onPress, colors, text }) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }], width: '85%' }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={styles.button}
      >
        <LinearGradient colors={colors} style={styles.gradient}>
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for readability
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#2e7d32',
    elevation: 5,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  navButtons: {
    flexDirection: 'row',
  },
  navButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 10,
    elevation: 3,
  },
  navText: {
    color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
