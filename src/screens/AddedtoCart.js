import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, recipeList } from '../Constant'; // Check the correct path for the constants

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
            style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 8 }}
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
    <View style={styles.container}>
      <Text style={styles.cartText}>Your Cart</Text>
      <FlatList
        data={recipeList}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'pink',
  },
  listContainer: {
    marginTop: 16,
  },
  cartText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50, 
  },
  recipeItem: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
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
    marginRight: 12,
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  recipeTime: {
    fontSize: 14,
    color: '#666',
    marginRight: 25,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30, 
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.COLOR_PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddToCart;
