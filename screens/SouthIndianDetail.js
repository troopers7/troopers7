import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function SouthIndianDetail({ route }) {
  const { dish } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        {dish.ingredients?.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      {dish.benefits && (
        <View style={styles.card}>
          <Text style={styles.subtitle}>Health Benefits:</Text>
          <Text style={styles.description}>{dish.benefits}</Text>
        </View>
      )}

      {dish.drugInteraction && (
        <View style={styles.card}>
          <Text style={styles.subtitle}>Drug Interaction:</Text>
          <Text style={styles.warning}>{dish.drugInteraction}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#cba299' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#2c3e50' 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  subtitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#34495e' 
  },
  listItem: { 
    fontSize: 16, 
    marginLeft: 10, 
    marginBottom: 5, 
    color: '#555' 
  },
  description: { 
    fontSize: 16, 
    textAlign: 'justify', 
    color: '#444' 
  },
  warning: { 
    fontSize: 16, 
    color: '#d9534f', 
    fontWeight: 'bold' 
  },
});
