import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 45) / 2; // 2 columns with margin

export default function HomeScreen() {
  const navigation = useNavigation();

  const categories = [
    { id: '1', name: 'Fruits', image: require('../assets/Fruit.jpg'), screen: 'FruitsScreen' }, 
    { id: '2', name: 'Vegetables', image: require('../assets/vegetables.jpg'), screen: 'VegetablesScreen' }, 
    { id: '3', name: 'South Indian Food', image: require('../assets/southindianfood.jpg'), screen: 'SouthIndianScreen' }, 
    { id: '4', name: 'West Indian Food', image: require('../assets/westindianfood.jpg'), screen: 'WesternIndianScreen' }, 
    { id: '5', name: 'Protein Food', image: require('../assets/proteinfood.jpg'), screen: 'ProteinScreen' }, 
    { id: '6', name: 'North Indian Food', image: require('../assets/northindianfood.jpg'), screen: 'NorthIndianScreen' }, 
    { id: '7', name: 'Snacks', image: require('../assets/snacks.jpg'), screen: 'SnacksScreen' }, 
    { id: '8', name: 'Desserts', image: require('../assets/desssert.jpg'), screen: 'DessertScreen' }, 
     { id: '9', name: 'Beverages', image: require('../assets/beverages.jpg'), screen: 'BeverageScreen' }, 

  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        key={'2'} // Important to avoid numColumns error
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cba299',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    width: CARD_WIDTH,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 2 },
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
});
