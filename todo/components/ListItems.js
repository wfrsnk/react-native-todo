import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const ListItems = ( {el, deleteHandler} ) => {
    
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
      padding: 20,
      textAlign: 'center',
      marginTop: 10,
      borderWidth: 1,
      width: '80%',
      marginLeft: '10%',
      backgroundColor: '#fafafa'
  }
})

export default ListItems