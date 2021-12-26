import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import SwipeOut from 'react-native-swipeout';


const ListItems = ( {el, deleteHandler, completedHandler} ) => {
    const swipeOutBtns = [
        {
          text: 'Delete',
          backgroundColor: '#ff0000',
          onPress: () => deleteHandler(el.key)
        }
      ]

  return (
      
      <SwipeOut  right={swipeOutBtns}>
        <TouchableOpacity style={styles.container} onPress={() => completedHandler(el.key)}>
            <Text style={el.completed ? styles.completeText : styles.text}>{el.text}</Text>
            
        </TouchableOpacity>
      </SwipeOut>
  )
}

const styles = StyleSheet.create({
    container  : {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca',
        width: '100%',
        backgroundColor: '#fafafa'
    },

    completeText: {
        color: '#528c83',
        textDecorationLine: 'line-through',
        textAlign: 'center',
        borderTopColor: '#aaa',
        width: '100%',
        backgroundColor: '#fafafa'
    },

    text: {
        textAlign: 'center',
        borderTopColor: '#aaa',
        width: '100%',
        backgroundColor: '#fafafa'
  }
})

export default ListItems