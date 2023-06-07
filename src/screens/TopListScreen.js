import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native'
import { ListComponent, CategoryTitle } from '../components'
import { data } from '../data'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

const TopListScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 20,
        }}>
        <Text style={{ fontSize: 20 }}>‹ Повернутися</Text>
      </TouchableOpacity>
      <ListComponent data={data} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 40,
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    paddingBottom: 100,
  },
})
export default TopListScreen
