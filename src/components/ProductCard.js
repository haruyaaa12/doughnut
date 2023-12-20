import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { colors, bestSellers } from '../Constant';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={bestSellers}
      horizontal
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate('ProductDetail', { item: item })}
          style={{
            backgroundColor: colors.COLOR_LIGHT,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 7,
            borderRadius: 16,
            marginVertical: 20,
            alignItems: 'center',
            paddingHorizontal: 8,
            paddingVertical: 26,
            marginRight: 16,
            width: 170,
            height: 260,
          }}>
          <Image
            source={item.image}
            style={{ width: 140, height: 140, resizeMode: 'center' }}
          />
          <Text style={{ fontSize: 13, marginTop: 10, marginLeft: 5 }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 5 }}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 4 }}>{item.rating}</Text>
              <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY} />
            </View>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 16 }}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
