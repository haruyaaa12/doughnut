import { StyleSheet, View, Text, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/Vqcfbfg.jpg' }}
      style={styles.background}
    >
      <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 40 }}>
        {/* render header */}
        <Header headerText={"Hello, there "} headerIcon={"bell-o"} />

        {/* Search Filter */}
        <SearchFilter icon="search" placeholder={"Search Flavors"} />

        {/* Categories filter */}
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
            Categories
          </Text>
          {/* Categories list */}
          <CategoriesFilter />
        </View>

        {/* Recipe List Filter */}
        <View style={{ marginTop: 22, flex: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
            Best Sellers
          </Text>
          {/* Recipes list */}
          <RecipeCard />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default RecipeListScreen;
