import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WesternIndianDetail({ route }) {
  const { dish } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{dish.name}</Text>

        <Text style={styles.subtitle}>🥘 Ingredients:</Text>
        {dish.ingredients?.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}

        {dish.benefits && (
          <View>
            <Text style={styles.subtitle}>💚 Health Benefits:</Text>
            <Text style={styles.description}>{dish.benefits}</Text>
          </View>
        )}

        {dish.drugInteraction && (
          <View>
            <Text style={styles.subtitle}>💊 Drug Interaction:</Text>
            <Text style={styles.warning}>{dish.drugInteraction}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#cba299',
  },
  box: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginTop: 10,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 10,
  },
  warning: {
    fontSize: 16,
    color: '#c0392b',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
