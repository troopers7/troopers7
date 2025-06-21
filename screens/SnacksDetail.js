import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SnacksDetail({ route }) {
  const { snack } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{snack?.name || 'Unknown Snack'}</Text>

        <Text style={styles.label}>🍃 Ingredients:</Text>
        <Text style={styles.text}>
          {snack?.ingredients?.join(', ') || 'No data available'}
        </Text>

        <Text style={styles.label}>🌟 Benefits:</Text>
        <Text style={styles.text}>
          {snack?.benefits || 'No benefits listed'}
        </Text>

        <Text style={styles.label}>💊 Drug Interaction:</Text>
        <Text style={styles.warning}>
          {snack?.drugInteraction || 'No cautions mentioned'}
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
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
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
    lineHeight: 24,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
