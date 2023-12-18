import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Button, ScrollView } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlaceOrder = () => {
  const navigation = useNavigation();
  const [personalInfo1, Name] = useState('');
  const [personalInfo2, Surname] = useState('');
  const [personalInfo3, Email] = useState('');
  const [personalInfo4, MobileNum] = useState('');
  const [personalInfo5, Birthdate] = useState('');
  const [personalInfo6, Age] = useState('');
  const [personalInfo7, Apartment] = useState('');
  const [personalInfo8, City] = useState('');
  const [personalInfo9, zip] = useState('');
  const [personalInfo10, State] = useState('');
  const [personalInfo11, Country] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const renderCheckBox = (value, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome
        name={value ? 'check-square' : 'square-o'}
        size={24}
        color={'#B22222'}  
      />
    </TouchableOpacity>
  );

  const handlePlaceOrder = () => {
    setTimeout(() => {
      setModalVisible(true);
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}> 
    <View style={styles.container}> 

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.title}>Personal Information</Text>
        {/* Grouping Name and Surname inputs horizontally */}
        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Name"
            value={personalInfo1}
            onChangeText={Name}
          />
          <TextInput
            style={[styles.input, styles.surname]}
            placeholder="Surname"
            value={personalInfo2}
            onChangeText={Surname}
          />
        </View>
        {/* Email, Mobile Number, Birthdate, Age inputs */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={personalInfo3}
          onChangeText={Email}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={personalInfo4}
          onChangeText={MobileNum}
        />
        {/* Grouping Birthdate and Age inputs horizontally */}
        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Birthdate"
            value={personalInfo5}
            onChangeText={Birthdate}
          />
          <TextInput
            style={[styles.input, styles.ageInput]}
            placeholder="Age"
            value={personalInfo6}
            onChangeText={Age}
          />
        </View>
      </View>

      {/* Address */}
      <View style={styles.section}>
        <Text style={styles.title2}>Address</Text>
        {/* Address-related inputs */}
        <TextInput
          style={styles.input}
          placeholder="Apartment/Suite/etc."
          value={personalInfo7}
          onChangeText={Apartment}
        />
        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="City"
            value={personalInfo8}
            onChangeText={City}
          />
          <TextInput
            style={[styles.input, styles.zip]}
            placeholder="ZIP"
            value={personalInfo9}
            onChangeText={zip}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="State/Province/Region"
          value={personalInfo10}
          onChangeText={State}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={personalInfo11}
          onChangeText={Country}
        />
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.title3}>Payment Method</Text>
        <View style={styles.checkboxContainer}>
          {renderCheckBox(paymentMethod === 'COD', () => setPaymentMethod('COD'))}
          <Text style={styles.checkboxText}>Cash on Delivery</Text>
        </View>
        <View style={styles.checkboxContainer}>
          {renderCheckBox(paymentMethod === 'Online', () => setPaymentMethod('Online'))}
          <Text style={styles.checkboxText}>Pay Online</Text>
        </View>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity onPress={handlePlaceOrder} style={styles.button}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
    <TouchableOpacity onPress={() => navigation.navigate("RecipeList")} style={styles.button}>
      <Text style={styles.buttonText}>Close</Text>
    </TouchableOpacity>
    </View>
</View>
      </Modal>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  surname: {
    width: '50%',  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 50,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'center',  
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  halfInput: {
    flex: 1,
    marginRight: 10,   
  },
  zip: {
    width: '30%', // Adjusted width for the Age input
  },
  ageInput: {
    width: '30%', // Adjusted width for the Age input
  },
  button: {
		backgroundColor: '#B22222',
    	paddingVertical: 5,
    	paddingHorizontal: 20,
    	borderRadius: 20, 
      marginBottom: 30,
	},

	buttonText: {
		fontSize: 18,
    	color: '#fff',
    	fontWeight: 'bold',
	},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default PlaceOrder; 