import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dessertData from '../data/desserts.json'; 

export default function DessertScreen() {
  const navigation = useNavigation();
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    if (dessertData && typeof dessertData === 'object') {
    
      const dessertsArray = Object.keys(dessertData).map((key) => ({
        id: key,
        ...dessertData[key],
      }));
      setDesserts(dessertsArray);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desserts</Text>
      {desserts.length > 0 ? (
        <FlatList
          data={desserts}
          keyExtractor={(item) => String(item.id)} 
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('DessertDetail', { dessert: item })}
            >
             
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noDataText}>No desserts available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#cba299' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  itemContainer: { padding: 15, backgroundColor: '#f8f8f8', marginVertical: 5, borderRadius: 5 },
  
  itemName: { fontSize: 18, fontWeight: 'bold', flexShrink: 1 },
  noDataText: { fontSize: 18, color: 'gray', textAlign: 'center', marginTop: 20 }
});
