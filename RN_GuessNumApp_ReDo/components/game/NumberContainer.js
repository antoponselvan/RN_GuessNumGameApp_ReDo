import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({children}) => {
  return (
  <View>
    <Text style={styles.text}>
      {children}
    </Text>
  </View>
  )
};

export default NumberContainer;

const styles = StyleSheet.create({
  text:{
    color:'white',
    fontSize: 24
  }
})