import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductCard from '../components/ProductCard';
import AllProducts from './AllProducts';

const AppListScreen = ({ navigation }) => {
  const item = AllProducts[0];
  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/j8igjlR.jpg' }}
      style={styles.background}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 40 }}>
        <Header headerIcon={'bell-o'} />
        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            shadowOpacity: 100,
            textShadowColor: '#421e18',
            textShadowOffset: { width: 0.5, height: 0.5 },
            textShadowRadius: 2,
          }}>
          Hello, There
        </Text>

        <SearchFilter icon="search" placeholder={'Search Flavors'} />

        <View style={{ marginTop: 22 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              shadowOpacity: 100,
              textShadowColor: '#421e18',
              textShadowOffset: { width: 0.5, height: 0.5 },
              textShadowRadius: 2,
            }}>
            Categories
          </Text>

          <CategoriesFilter />
        </View>

        <View style={{ marginTop: 22, flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              shadowOpacity: 100,
              textShadowColor: '#421e18',
              textShadowOffset: { width: 0.5, height: 0.5 },
              textShadowRadius: 2,
            }}>
            Best Sellers
          </Text>

          <ProductCard />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 20,
            alignSelf: 'center',
          }}>
          <Pressable
            style={styles.orderButton}
            onPress={() => navigation.navigate('AllProducts', { item })}>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                alignSelf: 'center',
                fontWeight: 'bold',
                shadowOpacity: 100,
                textShadowColor: '#461d17',
                textShadowOffset: { width: 0.5, height: 0.5 },
                textShadowRadius: 2,
              }}>
              Order Now
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  orderButton: {
    backgroundColor: '#A64c3d',
    marginBottom: 40,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 180,
    height: 40,
  },
});

export default AppListScreen;
