import {View, Text, StyleSheet} from 'react-native'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    margin:10,    
  }
})