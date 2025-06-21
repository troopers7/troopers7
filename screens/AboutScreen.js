import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
<View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>Food & Drug Interactions</Text>

        <View style={styles.section}>
          <FontAwesome5 name="question-circle" size={24} color="#ff6347" />
          <Text style={styles.sectionTitle}>Why It Matters?</Text>
          <Text style={styles.text}>
            Many people don’t realize that the food they eat can enhance or interfere with their medications. 
            Some combinations can make drugs less effective, while others can cause serious side effects.
          </Text>
        </View>

        <View style={styles.section}>
          <MaterialCommunityIcons name="database-search" size={24} color="#4682b4" />
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <Text style={styles.text}>✅ Comprehensive Database – Instantly search for food and drug interactions</Text>
          <Text style={styles.text}>✅ Personalized Alerts – Get warnings about risky combinations</Text>
          <Text style={styles.text}>✅ Expert-Backed Advice – Reliable, science-backed information</Text>
        </View>

        <View style={styles.section}>
          <MaterialCommunityIcons name="alert-circle" size={24} color="#d9534f" />
          <Text style={styles.sectionTitle}>Common Interactions to Watch For</Text>
          <Text style={styles.text}>🍊 Grapefruit & Medications – Can increase drug levels dangerously</Text>
          <Text style={styles.text}>☕ Caffeine & Antibiotics – May slow drug absorption</Text>
          <Text style={styles.text}>🍌 Bananas & Blood Pressure Meds – Too much potassium can be harmful</Text>
          <Text style={styles.text}>🥦 Leafy Greens & Blood Thinners – Can reduce medication effectiveness</Text>
        </View>

        <View style={styles.section}>
          <FontAwesome5 name="globe" size={24} color="#32cd32" />
          <Text style={styles.sectionTitle}>Stay Safe, Stay Healthy!</Text>
          <Text style={styles.text}>
            Understanding what you eat alongside your medication is key to better health. 
            Explore our app to make informed choices and avoid dangerous interactions.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#cba299',
  
 
  },
  scrollContent: {
    padding: 20,
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // more transparent white
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: '#444',
  },
});
