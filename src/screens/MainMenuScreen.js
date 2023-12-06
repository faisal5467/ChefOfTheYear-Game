// src/components/MainMenuScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
} from 'react-native';

const MainMenuScreen = ({navigation}) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  
  const handleLevelClick = () => {
    setSelectedLevel(true);
  };
  const handlePlayLevel = () => {
    // Navigate to PlayScreen with the selected level ID
    navigation.navigate('LevelScreen');
    setSelectedLevel(null); // Close the modal after navigation
  };
  const handleCloseModal = () => {
    setSelectedLevel(null);
  };
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
          <TouchableOpacity onPress={() => {handleLevelClick()}}>
          {/* <TouchableOpacity > */}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedLevel !== null}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          {/* <Text style={styles.modalText}>Replay Level {selectedLevel + 1}</Text> */}
          <View style={styles.replayButton}>
            <ImageBackground
              source={require('../assets/backmsg.png')}
              style={styles.popimage}>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: 220,
                  width: 280,
                  marginLeft: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={styles.modalText}>
                  Please Select a Level
                </Text>
                <Text style={styles.replayButtonText}>
                  You Want to Play the Lavel
                </Text>
                {/* <Text style={styles.replayButtonText}>Replay</Text> */}

                <View style={styles.soundButtonsContainer}>
                  {/* ON button */}
                  <TouchableOpacity
                    onPress={handlePlayLevel}
                    style={[styles.soundButton]}>
                    <Text style={styles.soundButtonText}>YES</Text>
                  </TouchableOpacity>

                  {/* OFF button */}
                  <TouchableOpacity
                    onPress={handleCloseModal}
                    style={[styles.soundButton]}>
                    <Text style={styles.soundButtonText}>NO</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </Modal>
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

  popimage: {
    // position: 'absolute',
    height: 270,
    width: 323,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 24,
    color: '#3DBB42',
    fontWeight: '600',
  },
  replayButton: {
    // backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
  },
  replayButtonText: {
    color: '#3DBB42',
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  imageone: {
    width: 70,
    height: 70,
  },

  soundButtonsContainer: {
    flexDirection: 'row',
    width: 270,
    justifyContent: 'space-between',
    borderRadius: 20,
    // marginTop:50
  },
  soundButton: {
    backgroundColor: '#3DBB42',
    padding: 10,
    borderRadius: 20,
    width: '45%', // Adjust as needed
    alignItems: 'center',
  },
  soundButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MainMenuScreen;
