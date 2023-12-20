import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
  } from 'react-native';
  import React from 'react';
  
  const WelcomeScreen = ({ navigation }) => {
	return (
	  <ImageBackground
		source={{ uri: 'https://i.imgur.com/Vqcfbfg.jpg' }}
		style={{ flex: 1, alignItems: 'center' }}>
		<View style={{ flex: 1, alignItems: 'center' }}>
		  <Image
			source={{ uri: 'https://i.imgur.com/MEz57qX.png' }}
			style={styles.donut}
		  />
  
		  <Text style={styles.dazzleText}> Doughnut Dazzle </Text>
  
		  <TouchableOpacity
			onPress={() => navigation.navigate('AppList')}
			style={styles.buttonContainer}>
			<Text style={styles.buttonText}> Get Started </Text>
		  </TouchableOpacity>
		</View>
	  </ImageBackground>
	);
  };
  
  const styles = StyleSheet.create({
	donut: {
	  marginTop: 130,
	  width: 300,
	  height: 300,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
  
	dazzleText: {
	  fontSize: 35,
	  fontWeight: 'bold',
	  color: '#ffffff',
	},
  
	buttonContainer: {
	  backgroundColor: '#A64c3d',
	  paddingVertical: 5,
	  paddingHorizontal: 20,
	  borderRadius: 20,
	  marginTop: 200,
	},
  
	buttonText: {
	  fontSize: 18,
	  color: '#fff',
	  fontWeight: 'bold',
	},
  });
  
  export default WelcomeScreen;
  