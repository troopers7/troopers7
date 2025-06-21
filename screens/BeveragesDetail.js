import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function BeveragesDetail({ route }) {
  const { beverage } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{beverage?.name || 'Unknown Beverage'}</Text>

        {beverage?.ingredients?.length > 0 && (
          <>
            <Text style={styles.label}>🍹 Ingredients:</Text>
            {beverage.ingredients.map((item, index) => (
              <Text key={index} style={styles.listItem}>• {item}</Text>
            ))}
          </>
        )}

        {beverage?.benefits && (
          <>
            <Text style={styles.label}>🌿 Health Benefits:</Text>
            <Text style={styles.text}>{beverage.benefits}</Text>
          </>
        )}

        {beverage?.drugInteraction && (
          <>
            <Text style={styles.label}>💊 Drug Interaction:</Text>
            <Text style={styles.warning}>{beverage.drugInteraction}</Text>
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
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
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
    color: '#343a40',
    marginTop: 12,
  },
  listItem: {
    fontSize: 16,
    color: '#495057',
    marginLeft: 10,
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    color: '#495057',
    marginTop: 5,
    lineHeight: 22,
  },
  warning: {
    fontSize: 16,
    color: '#d00000',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
