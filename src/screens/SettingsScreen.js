// src/components/SettingsScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SettingsScreen = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const [speed, setSpeed] = useState('medium');
  const speeds = ['slow', 'medium', 'fast'];

  const toggleSpeed = (selectedSpeed) => {
    setSpeed(selectedSpeed);
    // Add logic to handle speed settings
  };
  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    // Add logic to handle sound settings
  };

  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      <Image
        source={require('../assets/right_character.png')}
        style={styles.characterImage}
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/sound_bg.png')}
          style={styles.speedimg}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            Speed Of Play
          </Text>
        </ImageBackground>


        <View style={styles.speedContainer}>
          <View style={styles.speedButtonsContainer}>
            {speeds.map((s) => (
              <TouchableOpacity
                key={s}
                style={[styles.speedButton, speed === s ? styles.speedButtonActive : null]}
                onPress={() => toggleSpeed(s)}
              >
                <Text style={styles.speedButtonText}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* <View style={styles.speedContainer}>
          <View style={styles.speedButtonsContainer}>
           
            <TouchableOpacity
              style={[
                styles.speedButton,
                isSoundOn ? styles.soundButtonActive : null,
              ]}
              onPress={() => setIsSoundOn(true)}>
              <Text style={styles.soundButtonText}>ON</Text>
            </TouchableOpacity>

           
            <TouchableOpacity
              style={[
                styles.speedButton,
                !isSoundOn ? styles.soundButtonActive : null,
              ]}
              onPress={() => setIsSoundOn(false)}>
              <Text style={styles.soundButtonText}>OFF</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.speedButton,
                !isSoundOn ? styles.soundButtonActive : null,
              ]}
              onPress={() => setIsSoundOn(false)}>
              <Text style={styles.soundButtonText}>OFF</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        <ImageBackground
          source={require('../assets/sound_bg.png')}
          style={styles.soundimg}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            Sound
          </Text>
        </ImageBackground>

        {/* Sounds */}
        <View style={styles.soundContainer}>
          <View style={styles.soundButtonsContainer}>
            {/* ON button */}
            <TouchableOpacity
              style={[
                styles.soundButton,
                isSoundOn ? styles.soundButtonActive : null,
              ]}
              onPress={() => setIsSoundOn(true)}>
              <Text style={styles.soundButtonText}>ON</Text>
            </TouchableOpacity>

            {/* OFF button */}
            <TouchableOpacity
              style={[
                styles.soundButton,
                !isSoundOn ? styles.soundButtonActive : null,
              ]}
              onPress={() => setIsSoundOn(false)}>
              <Text style={styles.soundButtonText}>OFF</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 
      <View style={styles.soundContainer}>
          <TouchableOpacity
            style={[styles.soundButton, isSoundOn ? styles.soundButtonOn : styles.soundButtonOff]}
            onPress={toggleSound}
          >
            <Text style={styles.soundButtonText}>{isSoundOn ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>
        </View> */}
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
  speedimg: {
    width: 350,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',

    alignItems: 'center',
    top: 20,
  },
  soundimg: {
    width: 350,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',

    alignItems: 'center',
    bottom: 110,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },

  speedContainer: {
    marginBottom: 130,
    marginTop: 80,
    alignItems: 'center',
  },
//  /////////////////////

speedButtonsContainer: {
  flexDirection: 'row',
  width: 300,
  justifyContent: 'space-between',
  backgroundColor:'white', 
  borderRadius:20
},
speedButton: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 20,
  width: '30%', // Adjust as needed
  alignItems: 'center',
},
speedButtonActive: {
  backgroundColor: '#3DBB42',
},
speedButtonText: {
  color: 'black',
  fontWeight: 'bold',
  fontSize:18,
},
// /////////////////////

  soundContainer: {
    // marginTop: 20,
    // backgroundColor:'white',
    height: 50,
    alignItems: 'center',
  },
  soundText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
 
  soundButtonsContainer: {
    flexDirection: 'row',
    width: 250,
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  soundButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: '50%', // Adjust as needed
    alignItems: 'center',
  },
  soundButtonActive: {
    backgroundColor: '#3DBB42',
  },
  soundButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:18
  },
});

export default SettingsScreen;
