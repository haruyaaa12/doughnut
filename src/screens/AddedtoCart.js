import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Pressable, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, recipeList, bestSellers, cupcakeList, drinksList } from '../Constant'; // Check the correct path for the constants

const AddToCart = () => {
  const navigation = useNavigation();
  const [selectedRecipes, setSelectedRecipes] = useState({});

  const toggleSelection = (itemId) => {
    setSelectedRecipes((prevSelected) => ({
      ...prevSelected,
      [itemId]: !prevSelected[itemId],
    }));
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate('RecipeList', { item: item })}
      style={styles.recipeItem}
    >
      <View style={styles.recipeInfo}>
        <FontAwesome
          name={selectedRecipes[item.id] ? 'check-square' : 'square-o'}
          size={24}
          color={colors.COLOR_PRIMARY}
          onPress={() => toggleSelection(item.id)}
        />
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={{ width: 70, height: 70, resizeMode: 'cover', borderRadius: 8 }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameTimeContainer}>
            <Text style={styles.recipeName}>{item.name}</Text>
            <Text style={styles.recipeTime}>{item.time}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const handlePress = () => {
    // Handle button press action here
    console.log('Review order button pressed!');
    // Add logic for button press action
  };

  return ( 
    <ImageBackground
    source={{ uri: 'https://i.imgur.com/j8igjlR.jpg' }}
    style={styles.container}
  > 
    <View style={styles.container}>
      <Text style={styles.cartText}>Your Cart</Text>
      <FlatList
        data={bestSellers} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />  
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Next")} style={styles.button}>
          <Text style={styles.buttonText}>Review Order</Text>
        </TouchableOpacity>
      </View>
    </View> 
    </ImageBackground>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.7)',  
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  cartText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50, 
    marginLeft: 15,
    color: '#fff',
  },
  recipeItem: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 5,
    marginLeft: 5,
  },
  textContainer: {
    flex: 1,
  },   
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure vertical centering
    paddingRight: 10, // Add some padding to the right
  },
  recipeName: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  recipeTime: {
    fontSize: 14,
    color: '#666',
    marginLeft: 'auto',
    marginTop: 50, // Move the time to the right side 
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30, 
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#A64c3d',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,   
    width: 150,
    height: 40,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: "center",
    shadowOpacity: 100,
    textShadowColor: '#461d17', // Shadow color
    textShadowOffset: { width: 0.5, height: 0.5 }, // Shadow offset
    textShadowRadius: 2, 
  },
});

export default AddToCart;
