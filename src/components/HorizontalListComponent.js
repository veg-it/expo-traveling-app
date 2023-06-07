import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

const HorizontalListComponent = ({ item }) => {
  return (
    <View key={item.item.distance} style={styles.itemContainer}>
      <Image
        source={item.item.image}
        style={{ height: '100%', width: '100%', borderRadius: 16 }}
      />
      <View style={styles.itemOverflowContainer}>
        <View style={{ flex: 1 }}>
          <Text style={{marginBottom: 10}}>{item.item.title.length > 15 ? item.item.title.slice(0,15)+'...' : item.item.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>{item.item.distanse}</Text>
            <CustomButton title={'Перегляд'} item={item.item} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 180,
    height: 240,
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    marginRight: 16,
    position: 'relative',
  },
  itemOverflowContainer: {
    position: 'absolute',
    marginVertical: 8,
    bottom: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    marginHorizontal: 10,
    width: '90%'
  },
})
export default HorizontalListComponent
