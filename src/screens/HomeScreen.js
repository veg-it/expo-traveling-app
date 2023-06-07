import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native'
import { SvgFromXml } from 'react-native-svg'
import {
  ListComponent,
  CategoryTitle,
  HorizontalListComponent,
} from '../components'
import Constants from 'expo-constants'
import { searchIcon, location, user } from '../../assets/images/'
import { data } from '../data/index'

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('')

  const filteredData = searchText
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : data
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.locationBadge}>
          <SvgFromXml xml={location} style={{ color: 'red' }} color={'red'} />
          <Text>Ваше Місто</Text>
        </View>
        <View
          style={{
            height: 48,
            width: 48,
            backgroundColor: '#f2f2f2',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgFromXml xml={user} style={{ color: '#3f3f3f' }} />
        </View>
      </View>
      <Text style={{ flex: 1, fontWeight: '700', fontSize: 32, marginTop: 32 }}>
        Знайдіть своє щастя з нами!
      </Text>
      <View
        style={{
          marginVertical: 32,
          position: 'relative',
          justifyContent: 'center',
        }}>
        <SvgFromXml
          xml={searchIcon}
          style={{
            width: 10,
            height: 10,
            position: 'absolute',
            right: 16,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <TextInput
          placeholder="Знайдіть пункт призначення"
          onChangeText={(text) => setSearchText(text)}
          style={{
            borderRadius: 32,
            backgroundColor: '#f2f2f2',
            paddingVertical: 14,
            paddingHorizontal: 16,
          }}
        />
      </View>

      {searchText === '' && (
        <>
          <CategoryTitle title={'Популярні'} route={''} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.sort((a, b) => b.rating - a.rating).slice(0, 5)}
            renderItem={(item) => <HorizontalListComponent item={item} />}
            style={{ flex: 1, paddingBottom: 32 }}
          />
        </>
      )}

      <CategoryTitle title={'Найближчі місця'} route={''} />
      <ListComponent data={filteredData.slice(0,5)} />

      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 32,
    position: 'relative',
    paddingHorizontal: 20,
  },
  locationBadge: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
})
