// src/components/MainMenuScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const MainMenuScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      <Image
        source={require('../assets/left_charactor.png')}
        style={styles.characterImage}
      />
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          height: 200,
          width: 500,
          left: 140,
          justifyContent: 'center',
          // paddingBottom:30
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HintsScreen')}>
              <Image source={require('../assets/hints.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FavoriteRecipesScreen')}>
              <Image source={require('../assets/favourite_recipes.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('PlayScreen')}>
            <Image source={require('../assets/play.png')} />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LevelScreen')}>
              <Image source={require('../assets/level.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingsScreen')}>
              <Image source={require('../assets/setting.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: 200,
    height: 290,
    position: 'absolute',
    bottom: 0,
    // top: 0,
    left: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainMenuScreen;
