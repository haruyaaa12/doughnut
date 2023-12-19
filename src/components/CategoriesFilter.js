import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleCategoryPress = (category) => {
    // Navigate to another screen with the selected category
    navigation.navigate("AllProducts", { selectedCategory: category });
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryPress(category)}
              style={{
                backgroundColor: "#A64c3d", 
                marginRight: 20,
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                }}
              >
                {category.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;
