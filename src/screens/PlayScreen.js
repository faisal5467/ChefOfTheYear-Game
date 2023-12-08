import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
  PanResponder,
} from 'react-native';
const element1Image = require('../assets/empty_plate.png');

const plateImages = [
  require('../assets/paty.png'),
  require('../assets/zinger.png'),
  require('../assets/pakory.png'),
  require('../assets/chicken-plate.png'),
  require('../assets/amrod-plate.png'),
  require('../assets/chips-chicken-plate.png'),
  require('../assets/pizza.png'),
  require('../assets/anda-plate.png'),
  require('../assets/fruits-plate.png'),
  require('../assets/chips-wasal-plate.png'),
  require('../assets/andapred.png'),
];

// const bombImage = require('../assets/kala.png');
// const shootImage = require('../assets/amrod.png');
// const boostImage = require('../assets/piyaz.png');
// const fireImage = require('../assets/orange.png');
// const leaf = require('../assets/leaf.png');
// const gopi = require('../assets/gopi.png');

const levelElements = {
  1: {
    correctElements: [
      { id: 1, image: require('../assets/kala.png') },
      { id: 2, image: require('../assets/leaf.png') },
      { id: 3, image: require('../assets/single-rice.png') },
      { id: 4, image: require('../assets/tamatar.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 5, image: require('../assets/orange.png') },
      { id: 6, image: require('../assets/fan.png') },
      // Add more incorrect elements for level 1
    ],
  },
  2: {
    correctElements: [
      { id: 1, image: require('../assets/burger1.png') },
      { id: 2, image: require('../assets/fish.png') },
      { id: 3, image: require('../assets/burger2.png') },
      { id: 4, image: require('../assets/burger3.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 5, image: require('../assets/tamatar.png') },
      { id: 6, image: require('../assets/wasal.png') },
      // Add more incorrect elements for level 1
    ],
  },
  3: {
    correctElements: [
      { id: 1, image: require('../assets/fan.png') },
      { id: 2, image: require('../assets/slanti.png') },
      { id: 3, image: require('../assets/single-leaf.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 4, image: require('../assets/fan.png') },
      { id: 5, image: require('../assets/orange.png') },
      // Add more incorrect elements for level 1
    ],
  },
  4: {
    correctElements: [
      { id: 1, image: require('../assets/salat.png') },
      { id: 2, image: require('../assets/fish.png') },
      { id: 3, image: require('../assets/kala.png') },
      { id: 4, image: require('../assets/angor.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 5, image: require('../assets/wasal.png') },
      { id: 6, image: require('../assets/gopi.png') },
      // Add more incorrect elements for level 1
    ],
  },
  5: {
    correctElements: [
      { id: 1, image: require('../assets/tiki.png') },
      { id: 2, image: require('../assets/fish.png') },
      { id: 3, image: require('../assets/white-rice.png') },
      { id: 4, image: require('../assets/angor.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 5, image: require('../assets/fan.png') },
      { id: 6, image: require('../assets/orange.png') },
      // Add more incorrect elements for level 1
    ],
  },
  6: {
    correctElements: [
      { id: 1, image: require('../assets/kala-burger.png') },
      { id: 2, image: require('../assets/tamatar.png') },
      { id: 3, image: require('../assets/slanti.png') },
      { id: 4, image: require('../assets/angor.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 5, image: require('../assets/fish.png') },
      { id: 6, image: require('../assets/tiki.png') },
      // Add more incorrect elements for level 1
    ],
  },
  7: {
    correctElements: [
      { id: 1, image: require('../assets/burger1.png') },
      { id: 2, image: require('../assets/tamatar.png') },
      { id: 3, image: require('../assets/slanti.png') },
      { id: 4, image: require('../assets/angor.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 5, image: require('../assets/fish.png') },
      { id: 6, image: require('../assets/tiki.png') },
      // Add more incorrect elements for level 1
    ],
  },
  8: {
    correctElements: [
      { id: 1, image: require('../assets/half-fry.png') },
      { id: 2, image: require('../assets/leaf.png') },
      { id: 3, image: require('../assets/slanti.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 4, image: require('../assets/tamatar.png') },
      { id: 5, image: require('../assets/angor.png') },
      // Add more incorrect elements for level 1
    ],
  },
  9: {
    correctElements: [
      { id: 1, image: require('../assets/orange.png') },
      { id: 2, image: require('../assets/single-apple.png') },
      { id: 3, image: require('../assets/amrod.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 4, image: require('../assets/tiki.png') },
      { id: 5, image: require('../assets/fan.png') },
      // Add more incorrect elements for level 1
    ],
  },
  10: {
    correctElements: [
      { id: 1, image: require('../assets/wasal.png') },
      { id: 2, image: require('../assets/chips.png') },
      { id: 3, image: require('../assets/fish.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 4, image: require('../assets/orange.png') },
      { id: 5, image: require('../assets/tamatar.png') },
      // Add more incorrect elements for level 1
    ],
  },
  11: {
    correctElements: [
      { id: 1, image: require('../assets/half-fry.png') },
      { id: 2, image: require('../assets/droti.png') },
      { id: 3, image: require('../assets/salat.png') },
      // Add more correct elements for level 1
    ],
    incorrectElements: [
      { id: 4, image: require('../assets/fan.png') },
      { id: 5, image: require('../assets/zuban.png') },
      // Add more incorrect elements for level 1
    ],
  },
  // Add more levels as needed
};


const PlayScreen = ({navigation, route}) => {
  const {levelId} = route.params;
  console.log(' id is>>', levelId);
  const [timeRemaining, setTimeRemaining] = useState(40);
  ///////////////////////////////////////////////////////////////////////////////
  const [caughtElements, setCaughtElements] = useState([]);

  /////////////////////////////////////////////////////
  const [score, setScore] = useState(0);
  const panelRef = useRef();
  const [gameOver, setGameOver] = useState(false);
  const [fallingElements, setFallingElements] = useState([]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const {moveX} = gestureState;
      if (panelRef.current) {
        panelRef.current.setNativeProps({style: {left: moveX - 50}});
        checkForCollisions(moveX);
      }
    },
  });

  const checkForCollisions = panelX => {
    const panelBounds = { left: panelX - 50, right: panelX + 175, top: 0, bottom: 115 };
    
    setFallingElements(prevElements =>
      prevElements.map(element => {
        const elementBounds = {
          left: element.left,
          right: element.left + 50,
          top: element.top,
          bottom: element.top + 50,
        };

        const isCollision =
          element.falling &&
          panelBounds.left < elementBounds.right &&
          panelBounds.right > elementBounds.left &&
          elementBounds.bottom > 310; // mein Adjust kr raha this value based on your panel position

        if (isCollision) {
          handleElementCatch(element.type , element.id);
        }

        return isCollision ? {...element, falling: false} : element;
      }),
    );
  };

const handleElementCatch = (elementType, elementId) => {
  if (gameOver) {
    return;
  }

  const isCorrectElement = levelElements[levelId]?.correctElements.some(element => element.id === elementId);

  if (isCorrectElement) {
    // Handle correct element catch
    setScore(prevScore => prevScore + 1);

    const correctElement = levelElements[levelId]?.correctElements.find(element => element.id === elementId);
    if (correctElement) {
      setCaughtElements(prevElements => [
        ...prevElements,
        { id: elementId, type: elementType, image: correctElement.image },
      ]);
    }
  } else {
    // Handle incorrect element catch (deduct time or take other actions)
    setTimeRemaining(prevTimer => {
      const newTimeRemaining = prevTimer - 10;
      if (newTimeRemaining <= 0) {
        setGameOver(true);
        return 0;
      }

      // Display incorrect element in the plate
      const incorrectElement = levelElements[levelId]?.incorrectElements.find(element => element.id === elementId);
      if (incorrectElement) {
        setCaughtElements(prevElements => [
          ...prevElements,
          { id: elementId, type: elementType, image: incorrectElement.image },
        ]);
      }

      return newTimeRemaining;
    });
  }
};


  useEffect(() => {
    let animationFrameId;

    const updateFallingElements = () => {
      if (gameOver) {
        return;
      }
      setFallingElements(prevElements =>
        prevElements.map(element => ({
          ...element,
          id: element.id,
          top: element.falling ? element.top + 5 : element.top,
        })),
      );

      // ////// aj 8 hai ye remove kr raha element
      // Remove caught elements that have reached the bottom
      setFallingElements(prevElements =>
      prevElements.filter(element => element.falling || element.top < 250),
    );


      animationFrameId = requestAnimationFrame(updateFallingElements);
    };

    animationFrameId = requestAnimationFrame(updateFallingElements);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameOver]);

  useEffect(() => {
    const generateNewElement = () => {
      if (gameOver) {
        return;
      }
      const newElement = generateRandomElement(levelId);
      setFallingElements(prevElements => [...prevElements, newElement]);
    };

    const fallingGenerator = setInterval(generateNewElement, 2000); // Adjust the interval based on your preference

    return () => {
      clearInterval(fallingGenerator);
    };
  }, [gameOver]);
  const generateRandomElement = (levelId) => {
    console.log('Current levelId:', levelId);
    const correctElements = levelElements[levelId].correctElements;
    const incorrectElements = levelElements[levelId].incorrectElements;
    
    const allElements = [...correctElements, ...incorrectElements];
    const randomElement = allElements[Math.floor(Math.random() * allElements.length)];
  
    return {
      id: randomElement.id, 
      type: randomElement.id,
      image: randomElement.image,
      top: 0,
      left: Math.random() * 800, // Adjust the range based on your design
      falling: true,
    };
  };
  
  
  const getImageByType = (element) => {
    return element ? element.image : null;
  };
  
  // Dynamically get the plate image based on the levelId
  const getPlateImage = () => {
    if (levelId >= 1 && levelId <= plateImages.length) {
      return plateImages[levelId - 1];
    }
   
  };

  return (
    <ImageBackground
      source={require('../assets/play-bg.png')}
      style={styles.backgroundImage}>
      {/* Table and Dish */}

      <Image source={require('../assets/table.png')} style={styles.table} />
      <View ref={panelRef} style={styles.plate} {...panResponder.panHandlers}>
        <Image source={element1Image} style={{width: 225, height: 115}} />
        {/* Display caught elements inside the plate */}
       {caughtElements.map((element, index) => (
  <Image
    key={index}
    source={element.image}  // Use element.image directly
    style={{
      ...styles.fallingElement,
      top: 5 + Math.floor(index / 6) * 20,
      left: 10 + (index % 6) * 30,
    }}
  />
))}

      </View>
      {/* Falling Elements */}
      {fallingElements.map((element, index) => (
        <Image
          key={index}
          source={getImageByType(element)}
          style={{
            ...styles.fallingElement,
            top: element.top,
            left: element.left,
          }}
        />
      ))}

      {/* Game Over Modal */}
      <Modal transparent={true} animationType="slide" visible={gameOver}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Game Over! Total Score: {score}
            </Text>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                // Implement logic to reset the game or navigate to another screen
                setGameOver(false);
                setScore(0);
                navigation.navigate('MainMenuScreen');
              }}>
              <Text style={styles.menuButtonText}>Return to Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.timerContainer}>
        <ImageBackground
          source={require('../assets/red-circle.png')}
          style={styles.timerimage}>
          <Text style={styles.timerText}> {timeRemaining}</Text>
        </ImageBackground>
      </View>

      {/* Left Window with Recipe Image */}
      <View style={styles.leftWindow}>
        {/* Show the image of the current recipe */}
        <Image source={getPlateImage()} style={styles.recipeImage} />
      </View>
      {/* Timer Display */}
      <View style={styles.scoreContainer}>
        <ImageBackground
          source={require('../assets/score-img.png')}
          style={styles.timerimage}>
          <Text style={styles.scoreText}>{score}</Text>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: '100%',
    height: '30%',
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
  timerContainer: {
    position: 'absolute',
    top: 10,
    padding: 2,
  },
  timerimage: {
    height: 70,
    width: 71,
    justifyContent: 'center',
    textAlign: 'center',
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  dishContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10%',
  },
  dishIngredient: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  leftWindow: {
    position: 'absolute',
    top: '10%',
    left: '5%',
  },
  recipeImage: {
    resizeMode: 'cover',
  },
  scoreContainer: {
    position: 'absolute',
    top: '2%',
    right: '1%',
    padding: 2,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  flyingIngredient: {
    position: 'absolute',
    top: -20, // Start above the screen
  },
  ingredientImage: {
    width: 100,
    height: 50,
  },
  plate: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    // Ensure the plate is on top of other elements
  },
  fallingElement: {
    position: 'absolute',
    width: 45,
    height: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  menuButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PlayScreen;















































// ///////////////////////////////////////////////////////////////////////////////////////// final