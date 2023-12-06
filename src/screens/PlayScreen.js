import React, { useState, useEffect , useRef} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet , Modal,ImageBackground, PanResponder} from 'react-native';
import { useWindowDimensions } from 'react-native';
const element1Image = require('../assets/empty_plate.png');

const plateImages = [
  require('../assets/paty.png'),
  require('../assets/zinger.png'),
  require('../assets/pakory.png'),
  require('../assets/chicken-plate.png'),
  require('../assets/amrod-plate.png'),
  require('../assets/sekh.png'),
  require('../assets/pizza.png'),
  require('../assets/anda-plate.png'),
  require('../assets/fruits-plate.png'),
  require('../assets/cake.png'),
  require('../assets/andapred.png'),

];


const bombImage = require('../assets/kala.png');
const shootImage = require('../assets/amrod.png');
const boostImage = require('../assets/piyaz.png');
const fireImage = require('../assets/orange.png');
const leaf = require('../assets/leaf.png');
const gopi = require('../assets/gopi.png');

const ingredientsData = [
  // Define your ingredients here
  { id: 1, name: 'Tomato', image: require('../assets/amrod.png') },
  { id: 2, name: 'Orange', image: require('../assets/orange.png') },
  { id: 3, name: 'piyaz', image: require('../assets/piyaz.png') },
  { id: 4, name: 'chips', image: require('../assets/chips.png') },
  // Add more ingredients as needed
];

const recipesData = [
  // Define your recipes here
  { id: 1, name: 'Recipe 1', ingredients: [1, 2] },
  { id: 2, name: 'Recipe 2', ingredients: [3, 4] },
  { id: 3, name: 'Recipe 3', ingredients: [5, 6] },
  // Add more recipes as needed
];

const PlayScreen = ({navigation, route }) => {
  const { levelId } = route.params;
  console.log(' id is>>', levelId)
  const [dishIngredients, setDishIngredients] = useState([]);
  const [platePosition, setPlatePosition] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(40);
  ///////////////////////////////////////////////////////////////////////////////
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
    const panelBounds = {left: panelX - 50, right: panelX + 50};

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
          elementBounds.bottom > 550; // mein Adjust kr raha this value based on your panel position

        if (isCollision) {
          handleElementCatch(element.type);
        }

        return isCollision ? {...element, falling: false} : element;
      }),
    );
  };


  const handleElementCatch = elementType => {
  if (gameOver) {
    // saveScoreAndGameOver(score);
    return;
  }

  switch (elementType) {
    case 'fire':
    case 'boost':
    case 'shoot':
    case 'leaf':
    case 'gopi':
      setScore(prevScore => prevScore + 1);
      break;
    case 'bomb':
      setTimeRemaining(prevTimer => {
        const newTimeRemaining = prevTimer - 10;
        if (newTimeRemaining <= 0) {
          setGameOver(true);
          return 0; // Ensure the timer doesn't go below 0
        }
        return newTimeRemaining;
      });
      break;
    default:
      break;
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
          top: element.falling ? element.top + 5 : element.top,
        })),
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
      const newElement = generateRandomElement();
      setFallingElements(prevElements => [...prevElements, newElement]);
    };

    const fallingGenerator = setInterval(generateNewElement, 2000); // Adjust the interval based on your preference

    return () => {
      clearInterval(fallingGenerator);
    };
  }, [gameOver]);

  const generateRandomElement = () => {
    const types = ['bomb', 'shoot', 'boost', 'fire', 'gopi', 'leaf'];
    const randomType = types[Math.floor(Math.random() * types.length)];

    return {
      type: randomType,
      top: 0,
      left: Math.random() * 800, // Adjust the range based on your design
      falling: true,
    };
  };

  const getImageByType = type => {
    switch (type) {
      case 'bomb':
        return bombImage;
      case 'shoot':
        return shootImage;
      case 'boost':
        return boostImage;
      case 'fire':
        return fireImage;
      case 'leaf':
        return leaf;
      case 'gopi':
        return gopi;
      default:
        return null;
    }
  };


  // ////////////////////////////////////////// level id

  // Dynamically get the plate image based on the levelId
  const getPlateImage = () => {
    if (levelId >= 1 && levelId <= plateImages.length) {
      return plateImages[levelId - 1];
    }
    // Return a default image or handle the case when the levelId is out of range
    // return require('../assets/amrod-plate.png');
  };

  // Dynamically get the ingredients based on the levelId
  // const getIngredientsForLevel = () => {
  //   if (levelId >= 1 && levelId <= recipesData.length) {
  //     return recipesData[levelId - 1].ingredients;
  //   }
  //   // Return a default set of ingredients or handle the case when the levelId is out of range
  //   return [1, 2];
  // };

  // // Set up the game with the specific plate image and ingredients for the selected level
  // useEffect(() => {
  //   setIngredients(getIngredientsForLevel());
  // }, [levelId]);



  // //////////////////////////////////////////////////////
  return (
    <ImageBackground
    source={require('../assets/play-bg.png')}
    style={styles.backgroundImage}>
      {/* Table and Dish */}
      
      <Image source={require('../assets/table.png')} style={styles.table} />
      {/* <View style={[styles.plate, { left: platePosition.x, top: platePosition.y }]} ref={panelRef} style={styles.panel} {...panResponder.panHandlers}> */}
      <View ref={panelRef} style={styles.plate} {...panResponder.panHandlers}>
        <Image source={element1Image} style={{ width: 180, height: 90 }} />
      </View>
       {/* Falling Elements */}
       {fallingElements.map((element, index) => (
        <Image
          key={index}
          source={getImageByType(element.type)}
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
        <ImageBackground source={require('../assets/red-circle.png')} style={styles.timerimage} >
        <Text style={styles.timerText}>  {timeRemaining}</Text>
        </ImageBackground>
      </View>
      {/* <View style={styles.dishContainer}>
        {dishIngredients.map((ingredientId, index) => (
          <Image
            key={index}
            source={ingredientsData.find((ingredient) => ingredient.id === ingredientId).image}
            style={styles.dishIngredient}
          />
        ))}
      </View> */}


       {/* Left Window with Recipe Image */}
       <View style={styles.leftWindow}>
        {/* Show the image of the current recipe */}
        <Image source={getPlateImage()} style={styles.recipeImage} />
      </View>
      {/* <View style={styles.leftWindow}>
       
        <Image source={require('../assets/amrod-plate.png')} style={styles.recipeImage} />
      </View> */}


      {/* Timer Display */}
      <View style={styles.scoreContainer}>
        
        <ImageBackground source={require('../assets/score-img.png')} style={styles.timerimage} >
        <Text style={styles.scoreText}>{score}</Text>
        </ImageBackground>
      </View>

{/* {ingredients.map((ingredient) => (
        <TouchableOpacity
          key={ingredient.key}
          onPress={() => handleIngredientSelect(ingredient)}
          style={[styles.flyingIngredient, { left: ingredient.x, top: ingredient.y }]}
        >
          <Image source={ingredient.image} style={styles.ingredientImage} />
        </TouchableOpacity>
      ))} */}
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
    padding:2,
    
  },
  timerimage: {
   height:70, 
   width:71,
   justifyContent:'center',
    textAlign:'center'
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center'
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
padding:2,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center'
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
    width: 40,
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
    color:'black'
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
