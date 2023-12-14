import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function UIButton(props) {
    const {onPress, title, style,error} = props
  return (
    <TouchableOpacity
        // onPress={props.onPress}
        onPress={onPress}
        style={style}
        error = {error}
       >

          <Text style={{
            fontSize:20,
            color:'white',
            margin:5,
          }}>{title}</Text>
        </TouchableOpacity>
  )
}

export default UIButton
