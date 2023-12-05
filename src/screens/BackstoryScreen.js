// src/components/BackstoryScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const BackstoryScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      {/* Top image */}
      <ImageBackground
        source={require('../assets/backmsg.png')}
        style={styles.topImage}>
        {/* <Image source={require('../assets/main_text_one.png')} style={styles.main_text_Image} /> */}
        <View
          style={{
            height: 210,
            width: 290,
            marginBottom: 20,
            marginLeft: 10,
            // backgroundColor: 'red',
            overflow: 'hidden',
          }}>
          <Text style={styles.backstoryText}>
            Help Phil get an internship at work and become a chef in a
            restaurant. He's been dreaming of this for a long time - and he's
            hoping for your help.
          </Text>
        </View>
      </ImageBackground>

      <Image
        source={require('../assets/left_charactor.png')}
        style={styles.characterImage}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('BackStoryTwo')}
        style={{
          height: 70,
          width: 80,
          top: 120,
          left: 720,
        }}>
        <Image
          source={require('../assets/forward.png')}
          style={styles.imageTwo}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    // flexDirection: 'row', // Use row to position character and next arrow side by side
    // justifyContent: 'space-between', // Adjust as needed
    // alignItems: 'flex-end', // Align items to the bottom
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'red',
  },
  topImage: {
    width: 325,
    height: 275,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: '30%', 
  },

  characterImage: {
    width: 200,
    height: 290,
    position: 'absolute',
bottom:0
 
  },

  backstoryText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3DBB42',
  },
  imageTwo: {
    width: 70,
    height: 70,
  },
});

export default BackstoryScreen;
