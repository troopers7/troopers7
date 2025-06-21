import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FruitDetail({ route }) {
  const { fruit } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{fruit.name}</Text>
        <Text style={styles.text}>🍏 Benefit: {fruit.benefit}</Text>
        <Text style={styles.text}>💊 Drug Interaction: {fruit.drugInteraction}</Text>

        <Text style={styles.sectionTitle}>📜 Description:</Text>
        {fruit.description.map((desc, index) => (
          <Text key={index} style={styles.listItem}>• {desc}</Text>
        ))}

        <Text style={styles.sectionTitle}>📚 References:</Text>
        {fruit.references.map((ref, index) => (
          <Text key={index} style={styles.listItem}>
            {ref.author} - "{ref.title}" ({ref.journal}, {ref.year}, Vol {ref.volume}, pp. {ref.pages})
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cba299',
  },
  box: {
    backgroundColor: '#f8f8f8', // light gray background
    borderRadius: 10,           // rounded corners
    padding: 15,                // inner padding
    shadowColor: '#000',        // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,               // shadow for Android
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 15,
  },
  listItem: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
    marginTop: 5,
  },
});
