import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import AppListScreen from "../screens/AppListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen"; 
import AddedtoCart from "../screens/AddedtoCart";
import AllProducts from "../screens/AllProducts"; 
import PlaceOrder from "../screens/PlaceOrder";
import Next from "../screens/Next";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="AppList" component={AppListScreen} />
				<Stack.Screen name="ProductDetail" component={ProductDetailsScreen} /> 
				<Stack.Screen name="Cart" component={AddedtoCart} />
				<Stack.Screen name="AllProducts" component={AllProducts} />  
				<Stack.Screen name="PlaceOrder" component={PlaceOrder} />
				<Stack.Screen name="Next" component={Next} /> 
				<Stack.Screen name="AddtoCart" component={AddedtoCart} /> 

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});