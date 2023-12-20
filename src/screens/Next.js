import React, { useState } from 'react';
import { bestSellers } from '../Constant';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Next = () => {
  const navigation = useNavigation();
  // Create a state object to store quantity for each item
  const [quantities, setQuantities] = useState(
    bestSellers.reduce((acc, item) => {
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
      {bestSellers.map((item) => (
        <Pressable
          key={item.id.toString()}
          onPress={() => navigation.navigate('ProductDetail', { item })}
          style={styles.itemContainer}>
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
        <Text style={styles.subtotalValue}> ₱ 253.74 </Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('PlaceOrder')}
          style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 10,
  },
  imageContainer: {
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#B22222',
    borderRadius: 8,
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
    color: '#666',
    marginLeft: 'auto',
    marginTop: 40,
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
    paddingVertical: 5,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  quantityButton: {
    paddingHorizontal: 5, // Adjust button padding
    paddingVertical: 1, // Adjust button padding
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 10, // Adjust font size as needed
  },
  line: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginBottom: 10,
    marginTop: 20,
  },
  subtotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align text elements
    paddingRight: 16,
    marginBottom: 5, // Adjust margin bottom
  },
  subtotalText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 40,
  },
  subtotalValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginRight: 30,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align text elements
    paddingRight: 16,
    marginBottom: 5, // Adjust margin bottom
  },
  shippingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 40,
  },
  shippingValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginRight: 30,
  },

  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    marginBottom: 5,
  },
  totalText: {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: 'bold',
    marginLeft: 40,
  },
  totalValue: {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: 'bold',
    marginRight: 30,
  },
  line1: {
    height: 2,
    backgroundColor: '#d3d3d3',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    shadowOpacity: 100,
    textShadowColor: '#461d17',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2, 
  },
  buttonContainer: {
    backgroundColor: '#A64c3d',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 150,
    height: 40,
    alignSelf: 'center', 
    marginBottom: 30,
    marginTop: 30,
  },
});
export default Next;
