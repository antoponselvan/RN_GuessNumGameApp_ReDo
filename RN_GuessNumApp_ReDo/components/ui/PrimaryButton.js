import {View, Text, Pressable, StyleSheet} from 'react-native'

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer:{
    width:80,
    height: 30,
    borderRadius: 23,
    backgroundColor: 'brown',
    justifyContent:'center',
    alignItems: 'center',
    margin:2
  },
  buttonText:{
    color: 'white'
  }
})