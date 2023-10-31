import { useEffect, useState } from 'react'
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native'
import Title from '../components/ui/Title'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import NumberContainer from '../components/game/NumberContainer'
import GuessLogItem from '../components/game/GuessLogItem'

let minVal = 0
let maxVal = 100

const GameScreen = ({userNum, onGameOver}) => {
  const [guessList, setGuessList] = useState([])
  const [currentGuess, setCurrentGuess] = useState(50)

  useEffect(()=>{
    if (currentGuess == parseInt(userNum)) {
      onGameOver(guessList.length);
      Alert.alert("Game over");
    }
  },[currentGuess, userNum])
  const nextGuessHandler = (direction) => {
    switch (direction){
      case "higher":
        if (currentGuess > maxVal){
          Alert.alert("Dont Lie Asshole!")
          return
        }
        minVal = currentGuess + 1
        break;
      case "lower":
        if (currentGuess < minVal){
          Alert.alert("Dont Lie")
          return
        }
        maxVal = currentGuess - 1
        break;
      default:
        break;
      }
      setCurrentGuess(()=>Math.floor((minVal + Math.random()*(maxVal-minVal))))
      guessList.push(currentGuess)
      console.log(minVal, maxVal)
      
  }

  return (
    <View>
      <Card>
        <Title>Current Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </Card>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>+++</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this,"lower")}>---</PrimaryButton>
        </View>
      </Card>
      <FlatList data={guessList} renderItem={(guess, idx)=>(<GuessLogItem roundNum={guess.index+1} guess={guess.item}/>)}/>
    </View>
  );
}

export default GameScreen

const styles= StyleSheet.create({
  buttonContainer:{
    flexDirection:'row'
  }
})