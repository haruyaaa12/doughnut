import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProductDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const AddToCart = (item) => {
    console.log('Item added to cart:', item);
    Alert.alert('Item Added', 'The item is added to your cart.');
  };

  return (
    <ImageBackground source={item.image} style={styles.backgroundImage}>
      <SafeAreaView style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <FontAwesome name={'arrow-circle-left'} size={28} color="white" />
        </Pressable>
        <FontAwesome name={'heart-o'} size={28} color="white" />
      </SafeAreaView>

      <View style={styles.content}>
        {/* Donut Name */}
        <Text style={styles.recipeName}>{item.name}</Text>

        {/* Stars */}
        <View style={styles.starsContainer}>
          {[...Array(4)].map((_, index) => (
            <FontAwesome
              key={index}
              name="star"
              size={25}
              color="#FFD700"
              style={{ marginRight: 15 }}
            />
          ))}
          <FontAwesome name="star-o" size={25} color="#FFD700" />
          <Text style={styles.starsText}>{item.time}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 12, marginRight: 10 }}>
            {item.description}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => AddToCart(item)}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.buttonContainer1}>
              <Image
                source={{ uri: 'https://i.imgur.com/ujVCczB.png' }}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 350,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 40,
    zIndex: 1,
  },
  backButton: {
    flex: 1,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 210,
    flex: 1,
  },
  recipeName: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 30,
    fontSize: 23,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#A64c3d',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 80,
    marginBottom: 30,
    marginLeft: 20,
    width: 200,
    height: 40, 
    marginLeft: 70,
    marginTop: 180,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    shadowOpacity: 100,
    textShadowColor: '#461d17',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  },
  buttonContainer1: {
    backgroundColor: '#A64c3d',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 80,
    marginBottom: 30,
    marginLeft: 20,
    width: 60,
    height: 40, 
    marginTop: 180,
  },
  buttonImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 25,
    marginRight: 40,
  },
  starsText: {
    fontSize: 20,
    marginLeft: 140,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
