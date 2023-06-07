import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { SvgFromXml } from 'react-native-svg'
import { location } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import CustomButton from './CustomButton'

const ListItemComponent = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.listItemContainer}>
      <Image source={item.image} style={styles.listItemImage} />

      <View
        style={{
          marginHorizontal: 16,
          marginVertical: 12,
        }}>
        <Text style={styles.listItemTitle}>
        {item.title.length > 20
              ? item.title.slice(0, 17) + '...'
              : item.title}</Text>
        <View style={{ flexDirection: 'row', marginTop: 4, marginBottom: 10 }}>
          <SvgFromXml xml={location} style={{ marginRight: 5 }} />
          <Text style={styles.listItemLocation}>
            {item.location.length > 20
              ? item.location.slice(0, 17) + '...'
              : item.location}
          </Text>
        </View>

        <Text
          style={{
            color: '#828282',
          }}>
          {item.distance}
        </Text>
      </View>
      <CustomButton title={'Перегляд'} item={item} />
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 8,
    marginTop: 8,
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  listItemLocation: {
    color: '#828282',
    fontSize: 12,
  },
})
export default ListItemComponent
