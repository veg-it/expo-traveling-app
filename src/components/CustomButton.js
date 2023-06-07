import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CustomButton = ({ title, item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.customButtonContainer}
      onPress={() => navigation.navigate('Detailed', { item })}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  customButtonContainer: {
    backgroundColor: '#5893D8',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 8,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 10,
  },
})
export default CustomButton
