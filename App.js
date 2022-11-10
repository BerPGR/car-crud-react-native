import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login';
import Home from './src/views/Home';
import Details from './src/views/Details';
import Addcar from './src/views/Addcar';
import Edit from './src/views/Edit';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Addcar' component={Addcar}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='Edit' component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}