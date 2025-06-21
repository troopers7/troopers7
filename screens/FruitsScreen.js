import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fruitsData from '../data/fruits.json';

export default function FruitsScreen() {
  const navigation = useNavigation();
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    setFruits(fruitsData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruits List</Text>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.fruitItem}
            onPress={() => navigation.navigate('FruitDetail', { fruit: item })}
          >
            <Text style={styles.fruitName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#cba299' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  fruitItem: { padding: 15, backgroundColor: '#f8f8f8', marginVertical: 5, borderRadius: 5 },
  fruitName: { fontSize: 18, fontWeight: 'bold' }
});
