import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function NorthIndianDetail({ route }) {
  const { dish } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{dish?.name || 'Unknown Dish'}</Text>

        <Text style={styles.label}>🍃 Ingredients:</Text>
        <Text style={styles.text}>
          {dish?.ingredients?.join(', ') || 'No data available'}
        </Text>

        <Text style={styles.label}>🌟 Benefits:</Text>
        <Text style={styles.text}>
          {dish?.benefits || 'No benefits listed'}
        </Text>

        <Text style={styles.label}>💊 Drug Interaction:</Text>
        <Text style={styles.warning}>
          {dish?.drugInteraction || 'No interaction details available'}
        </Text>
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
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    color: '#444',
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginTop: 5,
  },
  warning: {
    fontSize: 16,
    color: '#b00020',
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 5,
  },
});
