import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import { SvgFromXml } from 'react-native-svg'
import Constants from 'expo-constants'
import { location } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'

export default function DetailedScreen({ route }) {
  const { item } = route.params
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.detailedContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{
            marginBottom : 20
        }}>
            <Text style={{fontSize: 20}}>‹ Повернутися</Text>
        </TouchableOpacity>
      <Image source={item.image} style={styles.detailedImage} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text>{item.distance}</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 4, marginBottom: 10 }}>
        <SvgFromXml xml={location} style={{ marginRight: 5 }} />
        <Text style={styles.listItemLocation}>{item.location}</Text>
      </View>
      <Text style={styles.detailedItemAbout}>{item.about}</Text>
      <View style={{ alignItems: 'flex-end' }}>
        <View style={{ backgroundColor: '#5893D8', borderRadius: 8, marginTop: 20 }}>
          <Text
            style={{
              color: '#fff',
              padding: 10,
              fontSize: 20,
            }}>
            {item.rating} / 10
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detailedContainer: {
    paddingTop: Constants.statusBarHeight + 40,
    paddingHorizontal: 20,
  },
  detailedImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
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
    fontSize: 20,
    fontWeight: '700',
  },
  listItemLocation: {
    color: '#828282',
    fontSize: 12,
  },
  detailedItemAbout: {
    fontSize: 18,
    marginTop: 20,
  },
})
