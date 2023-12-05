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
    

      <View style={styles.contentContainer}>
        {/* Top image */}
        <ImageBackground
          source={require('../assets/backmsg.png')}
          style={styles.topImage}>
          {/* <Image source={require('../assets/main_text_one.png')} style={styles.main_text_Image} /> */}
          <View style={{height: 210, width: 290, marginBottom: 20}}>
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

        <TouchableOpacity onPress={() => navigation.navigate('BackStoryTwo')}>
          <Image
            source={require('../assets/forward.png')}
            style={styles.imageTwo}
            
          />
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row', // Use row to position character and next arrow side by side
    justifyContent: 'space-between', // Adjust as needed
    alignItems: 'flex-end', // Align items to the bottom
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  topImage: {
    width: 310,
    height: 270,
    position: 'absolute',
    justifyContent: 'center',

    alignItems: 'center',
    bottom: -110,
    left: '30%', // Center it horizontally
    // marginLeft: -50, // Adjust for the image width to center it
  },
  main_text_Image: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  characterImage: {
    width: 200,
    height: 290,
    position: 'absolute',

    top: -90,
    // left: 5,
    
  },
  backstoryTextContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginBottom: 20,
    width: '50%', // Adjust as needed
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
    position: 'absolute',
    top: 80,
    // left: 0,
    right: 20,
    // bottom:-60
  },
});

export default BackstoryScreen;
