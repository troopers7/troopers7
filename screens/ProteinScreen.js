import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import proteinData from '../data/proteins.json';

export default function ProteinScreen() {
  const navigation = useNavigation();
  const [proteins, setProteins] = useState([]);

  useEffect(() => {
    // Convert object to array
    const proteinArray = Object.keys(proteinData).map((key) => ({
      id: key,
      ...proteinData[key],
    }));
    setProteins(proteinArray);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protein Foods</Text>
      <FlatList
        data={proteins}
        keyExtractor={(item) => item.id.toString()} // Ensures key is a string
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('ProteinDetail', { dish: item })} // Pass `dish`
          >
        
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
  image: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  placeholderImage: { width: 50, height: 50, marginRight: 10, backgroundColor: '#ddd', borderRadius: 5 },
  itemName: { fontSize: 18, fontWeight: 'bold' }
});
