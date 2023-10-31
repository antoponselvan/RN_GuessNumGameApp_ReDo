import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Alert, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScren from './screens/GameOverScreen'

// import AppLoading from 'expo-app-loading'

export default function App() {
  const [userNum, setUserNum] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [numRounds, setNumRounds] = useState(0)

  const pickNumHandler = (num) => {
    const numConverted = parseInt(num)
    if (numConverted > 0 && numConverted <100){
      setUserNum(num)
      setGameIsOver(false)
      return
    }
    Alert.alert("Enter a proper Number")
  }

  const onGameOverHandler = (guessLength) => {
    setGameIsOver(true)
    setNumRounds(guessLength)
  }

  const resetGameHandler = () => {
    setNumRounds(0)
  }
  let screen = <StartGameScreen pickNumHandler={pickNumHandler}/>
  if (!gameIsOver) screen = <GameScreen userNum={userNum} onGameOver={onGameOverHandler}/>
  if (gameIsOver && numRounds > 0) screen = <GameOverScren numRounds={numRounds} resetGame={resetGameHandler}/>


  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <StatusBar/>
      <ImageBackground
        style={styles.container}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
      >
        <SafeAreaView>
          <ScrollView>
          {screen}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
    // justifyContent: 'center'
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
