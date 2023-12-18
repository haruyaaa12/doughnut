import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;
  
	const AddToCart = (item) => {
	  console.log('Item added to cart:', item);
	  Alert.alert('Item Added', 'The item is added to your cart.');
	};

  return (
     <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 40 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={'arrow-circle-left'} size={28} color="white" />
        </Pressable>
        <FontAwesome name={'heart-o'} size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          marginTop: 140,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            height: 300,
            width: 300,
            position: 'absolute',
            top: -150,
          }}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* Donut Name */}
        <Text style={styles.recipeName}>
          {item.name}
        </Text>

 {/* Stars */} 
 <View style={styles.starsContainer}>
          {[...Array(4)].map((_, index) => (
            <FontAwesome key={index} name="star" size={20} color="#FFD700" style={{ marginRight: 5 }} />
          ))}
          <FontAwesome name="star-o" size={20} color="#FFD700" />
		  <Text style={styles.starsText}>{item.time}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        {/* Donut Description */}
        <Text style={{ fontSize: 17, marginBottom: 10, marginTop: 20,}}>
          {item.description}
        </Text>

        

          {/* Add to Cart Button */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => AddToCart(item)}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.buttonContainer1}>
              <Image source={{ uri: 'https://i.imgur.com/ujVCczB.png' }} style={styles.buttonImage} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeName: {
    marginTop: 150,
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'flex-start', 
  },
  buttonContainer: {
    backgroundColor: '#B22222',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
	marginTop: 80,
    marginBottom: 30,
    marginLeft: 20,
    width: 200,
    height: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: "center",
  },
  buttonContainer1: {
    backgroundColor: '#B22222',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
	marginTop: 80,
    marginBottom: 30,
    marginLeft: 20,
    width: 60,
    height: 40,
  },
  buttonImage: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  starsContainer: {
    flexDirection: 'row', 
	marginTop: 40,
  },
  starsText: {
	fontSize: 15,
	marginLeft: 140,
	fontWeight: "bold",
  },
});

export default RecipeDetailsScreen;
