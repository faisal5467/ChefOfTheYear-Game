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

const HintsScreen = ({navigation}) => {
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
      <TouchableOpacity
        onPress={() => navigation.navigate('MainMenuScreen')}
        style={styles.backcontainer}>
        <Image source={require('../assets/back.png')} style={styles.backimg} />
      </TouchableOpacity>
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
        <View style={{width: '50%'}}>
          <TouchableOpacity
            onPress={preventRandomMistakes}
            style={styles.hintButton}>
            <Image
              source={require('../assets/bag.png')}
              style={styles.bagimage}
            />
          </TouchableOpacity>

          <Image
            source={require('../assets/40.png')}
            style={styles.fortybutton}
          />

          <Text style={styles.title}>
            don't waste your time for random mistakes
          </Text>

          <TouchableOpacity
            onPress={preventRandomMistakes}
            style={styles.fifhintButton}>
            <Image
              source={require('../assets/15mint.png')}
              style={styles.fifteenimage}
            />
          </TouchableOpacity>
        </View>

        <View style={{width: '50%'}}>
          <TouchableOpacity
            onPress={preventRandomMistakes}
            style={styles.hintButton}>
            <Image
              source={require('../assets/bag.png')}
              style={styles.bagimage}
            />
          </TouchableOpacity>

          <Image
            source={require('../assets/40.png')}
            style={styles.fortybutton}
          />

          <Text style={styles.title}>
            don't waste your time for random mistakes
          </Text>

          <TouchableOpacity
            onPress={preventRandomMistakes}
            style={styles.fifhintButton}>
            <Image
              source={require('../assets/10mint.png')}
              style={styles.fifteenimage}
            />
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
    width: 200,
    height: 290,
    position: 'absolute',
    bottom: 0,
    // top: 0,
    right: 0,
  },
  hintButton: {
    height: 150,
    width: 100,

    alignItems: 'center',
    position: 'absolute',
    left: 30,
    top:20
  },
  fifhintButton: {
    height: 100,
    width: 100,

    alignItems: 'center',
    position: 'absolute',
    left: 30,
    bottom:0
  },
  bagimage: {
    width: 180,
    height: 180,
  },
  fortybutton: {
    width: 70,
    height: 70,
    alignItems: 'center',
    left: 55,
    top: 75,
  },
  fifteenimage: {
    width: 80,
    height: 80,
    alignItems: 'center',
    // left: 70,
    // top: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    color: 'white',
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
