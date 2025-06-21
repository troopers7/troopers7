import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import eastIndianData from '../data/east_indian.json'; // ✅ Ensure correct path

export default function EastIndianScreen() {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const dishesArray = Object.keys(eastIndianData).map((key) => ({
      id: key,
      ...eastIndianData[key],
    }));
    setDishes(dishesArray);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>East Indian Dishes</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => navigation.navigate('EastIndianDetail', { dish: item })}
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
  itemContainer: { padding: 15, borderBottomWidth: 1 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
});
