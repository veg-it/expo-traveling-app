import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CategryTitle = ({ title, route, withoutButton }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
      {!withoutButton && (
        <TouchableOpacity onPress={() => navigation.navigate('TopList')}>
          <Text style={{ color: '#5893D8' }}>Всі</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleText: {
    color: '#333',
    fontWeight: '700',
    fontSize: 20,
  },
})
export default CategryTitle
