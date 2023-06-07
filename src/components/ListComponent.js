import React from 'react'
import { View } from 'react-native'
import ListItemComponent  from './ListItemComponent'


const ListComponent = ({data}) => {
  return (
    <View>
      {data.map((item, index) => (
        <ListItemComponent
          key={index}
          item={item}
        />
      ))}
    </View>
  )
}

export default ListComponent