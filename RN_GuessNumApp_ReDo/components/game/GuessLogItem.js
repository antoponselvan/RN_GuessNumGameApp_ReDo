import {View, Text, StyleSheet} from 'react-native'

const GuessLogItem = ({roundNum, guess}) => {
  return (
    <View style={styles.LogItem}>
      <Text style={styles.logItemText}>#{roundNum}</Text>
      <Text style={styles.logItemText}>Opponent's guess :  {guess}</Text>
    </View>
  );
}

export default GuessLogItem

const styles = StyleSheet.create({
  LogItem:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"brown",
    marginHorizontal:20,
    marginVertical:5
  },
  logItemText: {
    color:"white",
    fontSize:24
  }
})