import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import beveragesData from '../data/beverages.json';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 2 cards per row with 20px padding and 10px margin

export default function BeveragesScreen() {
  const navigation = useNavigation();
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    setBeverages(beveragesData);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BeveragesDetail', { beverage: item })}
      activeOpacity={0.8}
    >

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        {item.shortDescription && (
          <Text style={styles.description} numberOfLines={2}>{item.shortDescription}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beverages</Text>
      <FlatList
        data={beverages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cba299',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a237e',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: cardWidth,
    borderRadius: 15,
    overflow: 'hidden',
    // Shadow iOS
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    // Elevation Android
    elevation: 5,
  },
  image: {
    width: '100%',
    height: cardWidth,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0d47a1',
    textAlign: 'center',  // Center the name
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
    textAlign: 'center',  // Center the description
  },
});
