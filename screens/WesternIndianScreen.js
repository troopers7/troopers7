import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import westernIndianData from '../data/west_indian.json';

export default function WesternIndianScreen() {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(westernIndianData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Western Indian Dishes</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('WesternIndianDetail', { dish: item })}
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

  itemName: { fontSize: 18, fontWeight: 'bold' }
});
