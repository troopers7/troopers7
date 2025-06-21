import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function VegetableDetail({ route }) {
  const { vegetable } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{vegetable.name}</Text>
        <Text style={styles.text}>🥗 Description: {vegetable.description}</Text>
        <Text style={styles.text}>🌿 Benefits: {vegetable.benefits}</Text>
        <Text style={styles.text}>💊 Drug Interaction: {vegetable.drugInteraction}</Text>
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
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
});
