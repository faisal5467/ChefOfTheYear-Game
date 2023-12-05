// src/components/HintsScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const HintsScreen = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
  };

  const getExtraTime = () => {
    // Add logic to handle getting extra time
  };

  const preventRandomMistakes = () => {
    // Add logic to handle preventing random mistakes
  };

  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      <Image
        source={require('../assets/right_character.png')}
        style={styles.characterImage}
      />

      <View
        style={{
          flex: 1,
        //   backgroundColor: 'red',
          height: 200,
          width: 500,
          left: 70,
        //   justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View style={{ width:'50%'}}>
          <TouchableOpacity
            style={styles.hintButton}
            onPress={preventRandomMistakes}>
            <Image
              source={require('../assets/bag.png')}
              style={styles.bagimage}
            />
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.hintButton}
            onPress={preventRandomMistakes}>
            <Image source={require('../assets/40.png')} style={styles.fortybutton} />
          </TouchableOpacity>
          <Text style={styles.title}>don't waste your time for random mistakes</Text>
          <TouchableOpacity
            style={styles.hintButton}
            onPress={preventRandomMistakes}>
            <Image source={require('../assets/15mint.png')} style={styles.fifteenimage} />
          </TouchableOpacity>
        </View>

        <View style={{ width:'50%'}}>
          <TouchableOpacity
            style={styles.hintButton}
            onPress={preventRandomMistakes}>
            <Image
              source={require('../assets/bag.png')}
              style={styles.bagimage}
            />
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.hintButton}
            onPress={preventRandomMistakes}>
            <Image source={require('../assets/40.png')} style={styles.fortybutton} />
          </TouchableOpacity>
          <Text style={styles.title}>don't waste your time for random mistakes</Text>
          <TouchableOpacity
            style={styles.hintButton}
            onPress={preventRandomMistakes}>
            <Image source={require('../assets/10mint.png')} style={styles.fifteenimage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Countdown Timer */}
      {/* <Text style={styles.timerText}>
        Time until reset: {formatTime(timeLeft)}
      </Text> */}
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
  hintButton:{
 top:0, 
 left:0
  },
  bagimage: {

    width: 200,
    height: 200,
    alignItems: 'center',
    position:'absolute',
    left:10
    
  },
  fortybutton: {

    width: 70,
    height: 70,
    alignItems: 'center',
   left:85,
   top:60
    
  },
  fifteenimage: {

    width: 80,
    height: 80,
    alignItems: 'center',
   left:60,
   top:20
    
  },
//   bagimage: {
//     width: 150,
//     height: 150,
//     position: 'absolute',
//     bottom: 0,
//     left: 120,
//   },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
   textAlign:'center', 
   marginTop:100, 
   color: 'white'

  },
  hintsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  //   hintButton: {
  //     backgroundColor: 'white',
  //     padding: 15,
  //     borderRadius: 8,
  //     width: '45%',
  //     alignItems: 'center',
  //   },
  hintButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 16,
    color: 'white',
  },
});

export default HintsScreen;
