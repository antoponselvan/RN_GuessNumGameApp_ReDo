import {View, Image, StyleSheet} from 'react-native'
import Title from '../components/ui/Title'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'


const GameOverScreen = ({numRounds, resetGame}) => {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imgageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <Card>
        <InstructionText>`# of attempts = {numRounds}`</InstructionText>
        <PrimaryButton onPress={resetGame}>RESET</PrimaryButton>
      </Card>

    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  imgageContainer: {
    width: 300,
    height: 300,
    margin:36
  }
})