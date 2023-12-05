// src/components/FavoriteRecipesScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';


const FavoriteRecipesScreen = ({navigation}) => {
  // Placeholder data, replace with actual game data
  const bestTime = '2:30';
  const numCluesReceived = 5;
  const totalRecipesCollected = 10;
  const timeOfEarliestError = '1:45';
  const consecutiveLevelsPassed = 3;

  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      <Image
        source={require('../assets/right_character.png')}
        style={styles.characterImage}
      />
      <TouchableOpacity onPress={() => navigation.navigate('MainMenuScreen')}>
      <Image
        source={require('../assets/back.png')}
        style={styles.backimg}
      />
      </TouchableOpacity>
      <Text style={styles.nameText}>YOU</Text>
      <View style={styles.infoContainer}>
        <View style={styles.outer_view}>
            <View style={{width:'60%'}}>
          <Text style={styles.firstText}>Best Time:</Text>
            </View>
          <View style={styles.immer_view}>
            <Text style={styles.infoText}>{bestTime}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
        <View style={{width:'60%'}}>
          <Text style={styles.firstText}>Number of Clues Received:</Text>
          </View>
          <View style={styles.immer_view}>
            <Text style={styles.infoText}>{numCluesReceived}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
        <View style={{width:'60%'}}>
          <Text style={styles.firstText}>Total Recipes Collected:</Text>
          </View>
          <View style={styles.immer_view}>
            <Text style={styles.infoText}>{totalRecipesCollected}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
        <View style={{width:'60%'}}>
          <Text style={styles.firstText}>Time of Earliest Error:</Text>
          </View>
          <View style={styles.immer_view}>
            <Text style={styles.infoText}>{timeOfEarliestError}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
        <View style={{width:'60%'}}>
          <Text style={styles.firstText}>Consecutive Levels Passed:</Text>
          </View>
          <View style={styles.immer_view}>
            <Text style={styles.infoText}>{consecutiveLevelsPassed}</Text>
          </View>
        </View>
      </View>

      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  characterImage: {
    width: 200,
    height: 290,
    position: 'absolute',
    bottom: 0,
    // top: 0,
    right: 0,
  },
  backimg: {
    width: 70,
    height: 70,
    position: 'absolute',
    // bottom: 0,
    top: 10,
    left: 10,
  },
  outer_view: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '50%',
    // justifyContent: 'center',
  },
  immer_view: {
    height: 40,
    width: 90,
    margin:5,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 70,
  },

  infoContainer: {
    // backgroundColor: 'white',
    padding: 20,
  marginTop:30,
  marginLeft:80, 
    borderRadius: 8,

    width: '80%',
  },
  firstText: {
    fontSize: 24,
    marginBottom: 0,
    textAlign: 'justify',
    color:'white',
     fontWeight:'bold',
     
  },
  infoText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color:'black',
     fontWeight:'bold'
  },
  nameText: {
    fontSize: 35,
    fontWeight: 'bold',
    color:'#3DBB42',
    position:'absolute',
   
    // bottom: 0,
    top: 10,
    left: '55%',
  },

});

export default FavoriteRecipesScreen;
