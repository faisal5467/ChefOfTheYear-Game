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
      <TouchableOpacity onPress={() => navigation.navigate('MainMenuScreen')} style={styles.backcontainer}>
      <Image
        source={require('../assets/back.png')}
        style={styles.backimg}
      />
      </TouchableOpacity>
      <View style={{  position:'absolute',
    top: 2,
    left: '52%', height:70, width:100, }}>

<Image
        source={require('../assets/you.png')}
        style={styles.youimg}
      />
      </View>
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
  backcontainer: {
    height: 80,
    position: 'absolute',
    top: 10,
    left: 10,
    width: 80,
    justifyContent: 'center',
  },
  backimg: {
    width: 70,
    height: 70,
  },
  characterImage: {
    width: 220,
    height: 290,
    position: 'absolute',
    bottom: 0,
    // top: 0,
    right: 2,
  },
 
  outer_view: {
    flexDirection: 'row',
    width: '50%',
    margin:4,
    justifyContent: 'center',
    alignItems:'center',
  },
  immer_view: {
    height: 50,
    width: 120,
    // margin:5,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
    borderRadius: 20,
  
  },

  infoContainer: {
    // padding: 20,
  marginTop:20,
  marginLeft:80, 
    borderRadius: 8,

    width: '80%',
  },
  firstText: {
    fontSize: 24,
    marginBottom: 0,
    // textAlign: 'justify',
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
  youimg: {
    height:'100%',
    width:'100%', 
    resizeMode:'contain'
   
  },

});

export default FavoriteRecipesScreen;
