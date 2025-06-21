import React, { useState, useEffect } from 'react';
import { 
  View, TextInput, FlatList, Text, 
  StyleSheet, TouchableOpacity, Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fruitsData from '../data/fruits.json';
import vegetablesData from '../data/vegetables.json';
import southIndianData from '../data/southindian.json';
import westernIndianData from '../data/west_indian.json';
import snacksData from '../data/snacks.json';
import northIndianData from '../data/north_indian.json';
import eastIndianData from '../data/east_indian.json';
import dessertData from '../data/desserts.json'; 
import beveragesData from '../data/beverages.json';

import proteinData from '../data/proteins.json';

   


export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history when the component mounts
  useEffect(() => {
    loadSearchHistory();
  }, []);

  // Search whenever query updates
  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  // Load search history from AsyncStorage
  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Failed to load search history', error);
    }
  };

  // Save new search queries
  const saveSearchQuery = async (query) => {
    if (!query.trim() || searchHistory.includes(query)) return;
    
    const newHistory = [query, ...searchHistory].slice(0, 10); // Keep only last 10 searches
    setSearchHistory(newHistory);
    
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(newHistory));
    } catch (error) {
      console.error('Failed to save search history', error);
    }
  };

  // Handle search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredItems([]);
      return;
    }

 const combinedData = [
       ...fruitsData, 
       ...vegetablesData,
       ...southIndianData,
       ...westernIndianData,
       ...snacksData,
       ...northIndianData,
       ...eastIndianData,
       ...dessertData,
       ...beveragesData
      ];  

    const filtered = combinedData.filter((item) =>
      item.name?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredItems(filtered);
    saveSearchQuery(query); // Store search query
  };

  // Clear search history
  const clearSearchHistory = async () => {
    Alert.alert(
      "Clear History",
      "Are you sure you want to delete your search history?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Clear", 
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('searchHistory'); // Clear AsyncStorage first
              setSearchHistory([]); // Then update state
              console.log("Search history cleared successfully!");
            } catch (error) {
              console.error("Failed to clear search history", error);
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search for a fruit or vegetable..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Show search history */}
      {searchHistory.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Recent Searches:</Text>
          <FlatList
            data={searchHistory}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.historyItem} onPress={() => setSearchQuery(item)}>
                <Text style={styles.historyText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={clearSearchHistory} style={styles.clearHistoryButton}>
            <Text style={styles.clearHistoryText}>Clear History</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Display search results */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>🍏 Benefit: {item.benefits}</Text>
            {item.drugInteraction && (
              <Text style={styles.text}>💊 Drug Interaction: {item.drugInteraction}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

// =======================
// 📌 STYLES
// =======================
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#cba299' },
  searchBox: {
    padding: 12,
    fontSize: 18,
    backgroundColor: '#e9ecef',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  historyContainer: {
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#495057',
  },
  historyItem: {
    backgroundColor: '#dee2e6',
    padding: 8,
    borderRadius: 10,
    marginRight: 5,
  },
  historyText: { fontSize: 14, color: '#333' },
  clearHistoryButton: {
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  clearHistoryText: { fontSize: 14, color: 'red' },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#212529' },
  text: { fontSize: 16, color: '#495057', marginTop: 5 },
});

 