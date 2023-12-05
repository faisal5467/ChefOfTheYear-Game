// src/components/SettingsScreen.js
import React, {useState, useRef, useEffect}  from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = ({navigation}) => {

  const [isSoundOn, setIsSoundOn] = useState(false);
  const [speed, setSpeed] = useState('medium');
  const speeds = ['slow', 'medium', 'fast'];

  const toggleSpeed = (selectedSpeed) => {
    setSpeed(selectedSpeed);
    // Add logic to handle speed settings
  };
  const soundAnimation = useRef(new Animated.Value(isSoundOn ? 0 : 1)).current;

  const sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  
    console.log('Sound loaded successfully!!');
    console.log(
      'duration in seconds: ' +
        sound.getDuration() +
        ' number of channels: ' +
        sound.getNumberOfChannels(),
    );
  });
  

  // ///////////////////////////
  // const toggleSound = async () => {
  //   // Toggle the sound state
  //   const newSoundState = !isSoundOn;
  //   setIsSoundOn(newSoundState);

  //   // Save the updated sound state to AsyncStorage
  //   try {
  //     await AsyncStorage.setItem('isSoundOn', JSON.stringify(newSoundState));
  //   } catch (error) {
  //     console.error('Error saving sound state: ', error);
  //   }

  //   Animated.timing(soundAnimation, {
  //     toValue: newSoundState ? 0 : 1, // Change this line
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start();

  //   // Play or stop the sound based on the updated isSoundOn state
  //   if (newSoundState) {
  //     sound.play();
  //   } else {
  //     sound.stop();
  //   }
  // };
  const toggleSound = async (newSoundState) => {
    // Save the updated sound state to AsyncStorage
    try {
      await AsyncStorage.setItem('isSoundOn', JSON.stringify(newSoundState));
    } catch (error) {
      console.error('Error saving sound state: ', error);
    }
  
    setIsSoundOn(newSoundState);
  
    Animated.timing(soundAnimation, {
      toValue: newSoundState ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  
    // Play or stop the sound based on the updated isSoundOn state
    if (newSoundState) {
      sound.play();
    } else {
      sound.stop();
    }
  };
  


  useEffect(() => {
    const fetchSoundState = async () => {
      try {
        // Retrieve the sound state from AsyncStorage
        const storedSoundState = await AsyncStorage.getItem('isSoundOn');
       
        setIsSoundOn(
          storedSoundState !== null ? JSON.parse(storedSoundState) : true,
        );
       
      } catch (error) {
        console.error('Error fetching sound state: ', error);
      }
    };

    fetchSoundState();
  }, []);
  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
         <TouchableOpacity onPress={() => navigation.navigate('MainMenuScreen')}>
        <Image source={require('../assets/back.png')} style={styles.backimg} />
      </TouchableOpacity>
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
      onPress={() => toggleSound(true)}>
      <Text style={styles.soundButtonText}>ON</Text>
    </TouchableOpacity>

    {/* OFF button */}
    <TouchableOpacity
      style={[
        styles.soundButton,
        !isSoundOn ? styles.soundButtonActive : null,
      ]}
      onPress={() => toggleSound(false)}>
      <Text style={styles.soundButtonText}>OFF</Text>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backimg: {
    width: 70,
    height: 70,
    position: 'absolute',
    // bottom: 90,
    top: 10,
    left: 10,
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
