// src/components/LevelScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

// Import your level images
import level1Image from '../assets/paty.png';
import level2Image from '../assets/zinger.png';
import level3Image from '../assets/pakory.png';
import level4Image from '../assets/chicken-plate.png';
import level5Image from '../assets/amrod-plate.png';
import level6Image from '../assets/sekh.png';
import level7Image from '../assets/pizza.png';
import level8Image from '../assets/anda-plate.png';
import level9Image from '../assets/fruits-plate.png';
import level10Image from '../assets/cake.png';
import level11Image from '../assets/andapred.png';
// Add imports for other level images

const LevelScreen = ({navigation}) => {
  // Replace passedLevels array with the corresponding image sources
  const passedLevels = [
    {image: level1Image, level: 1},
    {image: level2Image, level: 2},
    {image: level3Image, level: 3},
    {image: level4Image, level: 4},
    {image: level5Image, level: 5},
    {image: level6Image, level: 6},
    {image: level7Image, level: 7},
    {image: level8Image, level: 8},
    {image: level9Image, level: 9},
    {image: level10Image, level: 10},
    {image: level11Image, level: 11},
  ];

  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelClick = index => {
    setSelectedLevel(index);
  };

  const handlePlayLevel = () => {
    // Navigate to PlayScreen with the selected level ID
    navigation.navigate('PlayScreen', {
      levelId: passedLevels[selectedLevel].level,
    });
    setSelectedLevel(null); // Close the modal after navigation
  };

  const handleCloseModal = () => {
    setSelectedLevel(null);
  };

  return (
    <ImageBackground
      source={require('../assets/bg1.png')}
      style={styles.backgroundImage}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainMenuScreen')}
        style={styles.backcontainer}>
        <Image source={require('../assets/back.png')} style={styles.backimg} />
      </TouchableOpacity>

      <View style={styles.levelsContainer}>
        <View style={styles.levelRow1}>
          {passedLevels.slice(0, 3).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.levelButton1}
              onPress={() => handleLevelClick(index)}>
              <Image source={item.image} style={styles.levelImage} />
              <View style={styles.levelLabel}>
                <Text
                  style={styles.levelLabelText}>{`Level ${item.level}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.levelRow}>
          {passedLevels.slice(3, 7).map((item, index) => (
            <TouchableOpacity
              key={index + 3} // Adjust the key to ensure uniqueness across rows
              style={styles.levelButton}
              onPress={() => handleLevelClick(index + 3)}>
              <Image source={item.image} style={styles.levelImage} />
              <View style={styles.levelLabel}>
                <Text
                  style={styles.levelLabelText}>{`Level ${item.level}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.levelRow}>
          {passedLevels.slice(7, 11).map((item, index) => (
            <TouchableOpacity
              key={index + 7} // Adjust the key to ensure uniqueness across rows
              style={styles.levelButton}
              onPress={() => handleLevelClick(index + 7)}>
              <Image source={item.image} style={styles.levelImage} />
              <View style={styles.levelLabel}>
                <Text
                  style={styles.levelLabelText}>{`Level ${item.level}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* <View style={styles.levelsContainer}>
        {passedLevels.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.levelButton}
            onPress={() => handleLevelClick(index)}>
            <Image source={item.image} style={styles.levelImage} />
            <View style={styles.levelLabel}>
              <Text style={styles.levelLabelText}>{`Level ${item.level}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View> */}

      <TouchableOpacity
        onPress={() => navigation.navigate('MainMenuScreen')}
        style={{
          height: 70,
          width: 80,
          bottom: 20,
          right: 20,
          position: 'absolute',
   
        }}>
        <Image
          source={require('../assets/forward.png')}
          style={styles.imageone}
        />
      </TouchableOpacity>
      {/* Modal for replaying level */}
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
                  Replay Level {selectedLevel + 1}
                </Text>
                <Text style={styles.replayButtonText}>
                  You Want to Replay the Lavel
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
    resizeMode: 'cover',
    // justifyContent: 'center',
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
  popimage: {
    // position: 'absolute',
    height: 270,
    width: 323,
  },
  // ////////////////
  levelsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginLeft: 100,
    width: '80%',
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  levelButton: {
    width: '23%', // Adjust as needed
  },
  levelRow1: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  levelButton1: {
    width: '25%',
  },
  levelImage: {
    width: '60%',
    height: 70,
  },
  levelLabel: {
    backgroundColor: '#3DBB42',
    padding: 5,
    borderRadius: 15,
    width: '60%',
    textAlign: 'center',
  },
  levelLabelText: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 18,
  },
  // /////////////////////

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

export default LevelScreen;
