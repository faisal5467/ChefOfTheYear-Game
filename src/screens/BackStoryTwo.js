// src/components/BackStoryTwo.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const BackStoryTwo = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      {/* Background image */}
      {/* <Image source={require('../assets/bg1.png')} style={styles.backgroundImage} /> */}

      <View style={styles.contentContainer}>
        {/* Top image */}
        <ImageBackground
          source={require('../assets/backmsg.png')}
          style={styles.topImage}>
          {/* <Image source={require('../assets/main_text_one.png')} style={styles.main_text_Image} /> */}
          <View
            style={{
              height: 260,
              width: 330,
              marginBottom: 30,
            //   backgroundColor: 'red',
            }}>
            <Text style={styles.backstoryText}>
              Carefully follow the recipes and collect dishes from the chef, do
              not forget to keep track of time or the chef will not be satisfied
              and the level will be considered lost. Don't forget to look in the
              hints to pass more levels and become the best restaurant worker.
            </Text>
          </View>
        </ImageBackground>
        <Image
          source={require('../assets/left_charactor.png')}
          style={styles.characterImage}
        />
        <TouchableOpacity onPress={() => navigation.navigate('MainMenuScreen')}>
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
    width: 360,
    height: 300,
    position: 'absolute',
    justifyContent: 'center',

    alignItems: 'center',
    bottom: -130,
    left: '30%', // Center it horizontally
    // marginLeft: -50, // Adjust for the image width to center it
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
    fontSize: 21,
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

export default BackStoryTwo;
