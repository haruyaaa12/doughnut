import React, { useState } from 'react';
import { colors, recipeList } from '../Constant';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Next = () => {
  const navigation = useNavigation();
  // Create a state object to store quantity for each item
  const [quantities, setQuantities] = useState(
    recipeList.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleIncrease = (itemId) => {
    if (quantities[itemId] < 99) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] + 1,
      }));
    }
  };

  const handleDecrease = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };
 
    return (
      
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.summary}>Order Summary</Text>
      {recipeList.map((item) => (
        <Pressable
          key={item.id.toString()}
          onPress={() => navigation.navigate('RecipeDetail', { item })}
          style={styles.itemContainer}
        >
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text>QNTY:</Text>
              <View style={styles.quantityControls}>
                <TouchableOpacity onPress={() => handleDecrease(item.id)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantities[item.id]}</Text>
                <TouchableOpacity onPress={() => handleIncrease(item.id)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
      {/* Line and Subtotal */}
      <View style={styles.line1} /> 
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}> Subtotal </Text>
        <Text style={styles.subtotalValue}>  ₱ 253.74 </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}> Shipping </Text>
        <Text style={styles.shippingValue}> ₱ 50.00 </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}> Total </Text>
        <Text style={styles.totalValue}> ₱ 303.74 </Text>
      </View>
      <View style={styles.line} />

      {/* Button Overlay */}
      <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={() => navigation.navigate("PlaceOrder")} style={styles.button}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    );
  };
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20, 
    marginLeft: 15,
    marginRight: 10,  
  },
  imageContainer: {
    marginRight: 16,
    borderWidth: 2, // Adding black border to the image
    borderColor: '#B22222', // Setting the color to black
    borderRadius: 8, // Adjust the border radius as needed
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    marginLeft: 10,
    color: '#999',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  quantityButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
  },
  quantity: {
    marginHorizontal: 8,
  },
  line: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginBottom: 10, 
    marginTop: 20,
    },
  subtotalContainer: { 
    paddingRight: 16,
    flexDirection: 'row',  
    alignItems: 'center', 
  }, 
  subtotalValue: {
    fontSize: 13, 
    color: '#333',
    marginLeft: 10,  
  },
  subtotalText: {
    fontSize: 14, 
    color: '#333', 
    alignSelf: "flex-start",
    marginLeft: 40,
    marginRight: 150,
  },
  summary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 20,
  },
  shippingContainer: { 
    paddingRight: 16,
    flexDirection: 'row',  
    alignItems: 'center', 
  }, 
  shippingValue: {
    fontSize: 13, 
    color: '#333',
    marginLeft: 10,  
  },
  shippingText: {
    fontSize: 14, 
    color: '#333', 
    alignSelf: "flex-start",
    marginLeft: 40,
    marginRight: 150,
  },  
  totalContainer: { 
    paddingRight: 16,
    flexDirection: 'row',  
    alignItems: 'center', 
  }, 
  totalValue: {
    fontSize: 13, 
    fontWeight: 'bold',
    color: '#FF0000',
    marginLeft: 10,  
  },
  totalText: {
    fontSize: 14, 
    fontWeight: 'bold',
    color: '#FF0000', 
    alignSelf: "flex-start",
    marginLeft: 40,
    marginRight: 175,
  },  
  line1: {
    height: 2,
    backgroundColor: '#d3d3d3',
    marginBottom: 10, 
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: "center",
  },
  buttonContainer: {
		backgroundColor: '#B22222',
    	paddingVertical: 5,
    	paddingHorizontal: 20,
    	borderRadius: 20,
    	marginTop: 10,
      marginBottom: 20,
      width: 120,
      height: 40,
      alignSelf: "center",
	},
});
export default Next;
