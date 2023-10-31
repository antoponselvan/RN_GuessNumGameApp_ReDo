import React from 'react'
import {Text, StyleSheet} from 'react-native'

const InstructionText = ({children, style}) => {
  return (
    <Text style={[style, styles.ixText]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  ixText: {
    fontSize:24,
    color:'white'
  }
  }
)