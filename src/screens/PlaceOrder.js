import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  ScrollView,
  Image,
} from 'react-native';
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
        color={'#A64c3d'}
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
        <View style={styles.section}>
          <Text style={styles.title}>Personal Information</Text>
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

        <View style={styles.section}>
          <Text style={styles.title2}>Address</Text>
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

        <View style={styles.section}>
          <Text style={styles.title3}>Payment Method</Text>
          <View style={styles.checkboxContainer}>
            {renderCheckBox(paymentMethod === 'COD', () =>
              setPaymentMethod('COD')
            )}
            <Text style={styles.checkboxText}>Cash on Delivery</Text>
          </View>
          <View style={styles.checkboxContainer}>
            {renderCheckBox(paymentMethod === 'Online', () =>
              setPaymentMethod('Online')
            )}
            <Text style={styles.checkboxText}>Pay Online</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handlePlaceOrder} style={styles.button}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={{ uri: 'https://i.imgur.com/JNxCzOc.png' }}
                style={styles.modalImage}
              />
              <Text style={styles.order}>Order Placed Successfully</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AppList')}
                style={styles.buttonm}>
                <Text style={styles.buttonTextclose}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    width: '30%',
  },
  ageInput: {
    width: '30%',
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
  buttonTextclose: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    shadowOpacity: 100,
    textShadowColor: '#461d17',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    width: 220,
    height: 210,
  },
  modalImage: {
    width: 130,
    height: 130,
  },
  button: {
    backgroundColor: '#A64c3d',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 30,
    width: 150,
    height: 40,
  },
  buttonm: {
    backgroundColor: '#A64c3d',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 30,
    width: 100,
    height: 30,
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
  order: {
    color: '#000',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PlaceOrder;
