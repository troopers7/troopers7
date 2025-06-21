import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import FruitsScreen from '../screens/FruitsScreen';
import FruitDetail from '../screens/FruitDetail';
import VegetablesScreen from '../screens/VegetablesScreen';
import VegetableDetail from '../screens/VegetableDetail';
import SouthIndianScreen from '../screens/SouthIndianScreen';
import SouthIndianDetail from '../screens/SouthIndianDetail';
import WesternIndianScreen from '../screens/WesternIndianScreen';
import WesternIndianDetail from '../screens/WesternIndianDetail';
import NorthIndianScreen from '../screens/NorthIndianScreen';
import NorthIndianDetail from '../screens/NorthIndianDetail';
import ProteinScreen from '../screens/ProteinScreen';
import ProteinDetail from '../screens/ProteinDetail';
import SnacksScreen from '../screens/SnacksScreen';
import SnacksDetail from '../screens/SnacksDetail';
import DessertScreen from '../screens/DessertScreen';
import DessertDetail from '../screens/DessertDetail';
import BeveragesScreen from '../screens/BeveragesScreen';
{/*import BeveragesDetail from '../screens/BeveragesDetail';*/}
import SearchScreen from '../screens/SearchScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* Home Stack */
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="FruitsScreen" component={FruitsScreen} options={{ title: 'Fruits' }} />
    <Stack.Screen name="FruitDetail" component={FruitDetail} options={{ title: 'Fruit Details' }} />
    <Stack.Screen name="VegetablesScreen" component={VegetablesScreen} options={{ title: 'Vegetables' }} />
    <Stack.Screen name="VegetableDetail" component={VegetableDetail} options={{ title: 'Vegetable Details' }} />
    <Stack.Screen name="SouthIndianScreen" component={SouthIndianScreen} options={{ title: 'South Indian Food' }} />
    <Stack.Screen name="SouthIndianDetail" component={SouthIndianDetail} options={{ title: 'Dish Details' }} />
    <Stack.Screen name="WesternIndianScreen" component={WesternIndianScreen} options={{ title: 'Western Indian Food' }} />
    <Stack.Screen name="WesternIndianDetail" component={WesternIndianDetail} options={{ title: 'Western Indian Dish Details' }} />
    <Stack.Screen name="NorthIndianScreen" component={NorthIndianScreen} options={{ title: 'North Indian Food' }} />
    <Stack.Screen name="NorthIndianDetail" component={NorthIndianDetail} options={{ title: 'North Indian Dish Details' }} />
    <Stack.Screen name="ProteinScreen" component={ProteinScreen} options={{ title: 'Protein Sources' }} />
    <Stack.Screen name="ProteinDetail" component={ProteinDetail} options={{ title: 'Protein Details' }} />
    <Stack.Screen name="SnacksScreen" component={SnacksScreen} options={{ title: 'Snacks' }} />
    <Stack.Screen name="SnacksDetail" component={SnacksDetail} options={{ title: 'Snack Details' }} />
    <Stack.Screen name="DessertScreen" component={DessertScreen} options={{ title: 'Desserts' }} />
    <Stack.Screen name="DessertDetail" component={DessertDetail} options={{ title: 'Dessert Details' }} />
  {/*  <Stack.Screen name="BeveragesScreen" component={BeveragesScreen} options={{ title: 'Beverages' }} />
    <Stack.Screen name="BeveragesDetail" component={BeveragesDetail} options={{ title: 'Beverage Details' }} /> */}
  </Stack.Navigator>
);

/* Main Tab Navigator */
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home-outline',
          Search: 'search-outline',
          About: 'information-circle-outline',
        };
        return <Ionicons name={icons[route.name]} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0, elevation: 5 },
      headerShown: true,
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
  </Tab.Navigator>
);

/* App Navigator with Intro Screen */
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
