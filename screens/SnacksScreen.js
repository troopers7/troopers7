import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import snacksData from '../data/snacks.json'; // Ensure you have a JSON file for snacks

export default function SnacksScreen() {
  const navigation = useNavigation();
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    setSnacks(Object.values(snacksData)); // Convert object to array
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Snacks</Text>
      <FlatList
        data={snacks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('SnacksDetail', { snack: item })}
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
  itemContainer:{ padding: 15, backgroundColor: '#f8f8f8', marginVertical: 5, borderRadius: 5 },

  itemName: { fontSize: 18, fontWeight: 'bold' }
});
