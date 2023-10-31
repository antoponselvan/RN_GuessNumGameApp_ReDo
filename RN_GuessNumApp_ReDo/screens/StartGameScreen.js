import { useState } from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'

const StartGameScreen = ({pickNumHandler}) => {
  const [enteredNum, setEnteredNum] = useState('')
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Pick a Number</InstructionText>
        <TextInput
          style={styles.numInput}
          keyboardType="number-pad"
          value={enteredNum}
          onChangeText={(txt) => setEnteredNum(txt)}
          maxLength={2}
        />
      </Card>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={()=>setEnteredNum('')}>Reset</PrimaryButton>
        <PrimaryButton onPress={pickNumHandler.bind(this,enteredNum)}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    alignItems: "center",
    marginTop: 100,
    // borderColor: "black",
    // borderWidth: 2,
    // margin:20
  },
  numInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop: 10
  }
});