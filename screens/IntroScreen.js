import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importing app logo from assets
const appLogo = require('../assets/Applogo.jpg');  

export default function IntroScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={appLogo} style={styles.image} />
      <Text style={styles.title}>Welcome to <Text style={styles.appName}>Interact Plus</Text></Text>
      <Text style={styles.subtitle}>Explore healthy food options and nutritional benefits.</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  image: { width: 200, height: 200, marginBottom: 20, borderRadius: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  appName: { fontSize: 26, fontWeight: 'bold', color: '#ff6347' }, 
  subtitle: { fontSize: 16, textAlign: 'center', marginHorizontal: 20, marginBottom: 20 },
  button: { backgroundColor: '#ff6347', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
