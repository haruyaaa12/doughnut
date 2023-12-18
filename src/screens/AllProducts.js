import React from 'react';
import { colors, recipeList } from '../Constant';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, TouchableOpacity, FlatList } from 'react-native';
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
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,
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
    <ScrollView>
      <Text style={styles.Donuts}>Donuts</Text>
      <FlatList
        data={recipeList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
      <Text style={styles.Cupcakes}>Cupcakes</Text>
      <FlatList
        data={recipeList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
      <Text style={styles.Drinks}>Drinks</Text>
      <FlatList
        data={recipeList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Donuts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60, 
    marginLeft: 16,
  },
  Cupcakes: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30, 
    marginLeft: 16,
  },
  Drinks: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20, 
    marginLeft: 16,
  },
});


export default AllProducts;
