import React,{useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, Platform  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackstoryScreen from './src/screens/BackstoryScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import HintsScreen from './src/screens/HintsScreen';
import FavoriteRecipesScreen from './src/screens/FavoriteRecipesScreen';
import LevelScreen from './src/screens/LevelScreen';
import PlayScreen from './src/screens/PlayScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BackStoryTwo from './src/screens/BackStoryTwo';

const Stack = createStackNavigator();

const App = () => {
  
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BackstoryScreen" screenOptions={{headerShown:false}} >
        <Stack.Screen name="BackstoryScreen" component={BackstoryScreen} />
        <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
        <Stack.Screen name="HintsScreen" component={HintsScreen} />
        <Stack.Screen name="FavoriteRecipesScreen" component={FavoriteRecipesScreen} />
        <Stack.Screen name="LevelScreen" component={LevelScreen} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="BackStoryTwo" component={BackStoryTwo} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
