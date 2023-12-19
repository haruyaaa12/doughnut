import React from 'react';  
import {colors, recipeList, drinksList, cupcakeList } from '../Constant';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';  

const AllProducts = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("RecipeDetail", { item: item })}
      style={{
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 10,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 20,
        marginRight: 16,
        width: 170,
        height: 250,
      }}
    >
      <Image
        source={item.image}
        style={{ width: 150, height: 150, resizeMode: "center" }}
      />
      <Text>{item.name}</Text>
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <Text>{item.time}</Text>
        <Text> | </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 4 }}>{item.rating}</Text>
          <FontAwesome
            name="star"
            size={16}
            color={colors.COLOR_PRIMARY}
          />
        </View>
      </View>
    </Pressable>
  );

  return ( 
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/j8igjlR.jpg' }}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        
    
    <ScrollView>
      <Text style={styles.Title}>All Products</Text> 
      <Text style={styles.Donuts}>Donuts</Text>
      <FlatList
        data={recipeList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
      <View style={styles.line1} /> 
      <Text style={styles.Cupcakes}>Cupcakes</Text>
      <FlatList
        data={cupcakeList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
      <View style={styles.line1} />  
      <Text style={styles.Drinks}>Drinks</Text>
      <FlatList
        data={drinksList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
      </ScrollView>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Donuts: {
    fontSize: 17,
    fontWeight: 'bold', 
    marginLeft: 16,
    color: '#fff',
    shadowOpacity: 100,
    textShadowColor: '#421e18', // Shadow color
    textShadowOffset: { width: 0.5, height: 0.5 }, // Shadow offset
    textShadowRadius: 2, 
  },
  Cupcakes: {
    fontSize: 17,
    fontWeight: 'bold', 
    marginLeft: 16,
    color: '#fff',
    shadowOpacity: 100,
    textShadowColor: '#421e18', // Shadow color
    textShadowOffset: { width: 0.5, height: 0.5 }, // Shadow offset
    textShadowRadius: 2, 
  },
  Drinks: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#fff',
    shadowOpacity: 100,
    textShadowColor: '#421e18', // Shadow color
    textShadowOffset: { width: 0.5, height: 0.5 }, // Shadow offset
    textShadowRadius: 2,  
  },
  Title:{
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,  
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'sans-serif',
    shadowOpacity: 100,
    textShadowColor: '#421e18', // Shadow color
    textShadowOffset: { width: 0.5, height: 0.5 }, // Shadow offset
    textShadowRadius: 2, 
  },
  line1: {
    height: 2,
    backgroundColor: '#C18d79',
    marginBottom: 10,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 20,
    shadowRadius: 2,
    elevation: 2, // Android shadow elevation
  },
  line: {
    height: 2,
    backgroundColor: '#C18d79',
    marginBottom: 10,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 20,
    shadowRadius: 2,
    elevation: 2, // Android shadow elevation
  },
});


export default AllProducts;
