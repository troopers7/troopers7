import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import vegetablesData from '../data/vegetables.json';

export default function VegetablesScreen() {
  const navigation = useNavigation();
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    setVegetables(vegetablesData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vegetables List</Text>
      <FlatList
        data={vegetables}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('VegetableDetail', { vegetable: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#cba299' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  itemContainer: { padding: 15, backgroundColor: '#f8f8f8', marginVertical: 5, borderRadius: 5 },

  itemName: { fontSize: 18, fontWeight: 'bold' }
});
