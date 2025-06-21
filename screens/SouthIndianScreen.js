import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import southIndianData from '../data/southindian.json';

export default function SouthIndianScreen() {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(southIndianData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>South Indian Dishes</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.dishItem}
            onPress={() => navigation.navigate('SouthIndianDetail', { dish: item })}
          >
            <Text style={styles.dishName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#cba299' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  dishItem: { padding: 15, backgroundColor: '#f8f8f8', marginVertical: 5, borderRadius: 5 },
  dishName: { fontSize: 18, fontWeight: 'bold' }
});
