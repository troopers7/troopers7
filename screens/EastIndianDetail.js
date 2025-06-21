import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function EastIndianDetail({ route }) {
  const { dish } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{dish?.name || 'Unknown Dish'}</Text>

        <Text style={styles.label}>🧾 Ingredients:</Text>
        <Text style={styles.text}>{dish?.ingredients || 'Not available'}</Text>

        <Text style={styles.label}>🍏 Benefit:</Text>
        <Text style={styles.text}>{dish?.benefits || 'No benefits listed'}</Text>

        {dish?.drugInteraction && (
          <>
            <Text style={styles.label}>💊 Drug Interaction:</Text>
            <Text style={styles.warning}>{dish.drugInteraction}</Text>
          </>
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
    backgroundColor: '#ffffff',
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
    color: '#212529',
    textAlign: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343a40',
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    color: '#495057',
    marginTop: 5,
    lineHeight: 24,
  },
  warning: {
    fontSize: 16,
    color: '#d00000',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
