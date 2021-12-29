import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import SwipeOut from 'react-native-swipeout';
import { connect } from 'react-redux';
import { deleteTask, setCompleted } from '../redux/actions';


const Task = ( {setCompleted, deleteTask, el} ) => {

    const swipeOutBtns = [
        {
          text: 'Delete',
          backgroundColor: '#ff0000',
          onPress: () => {deleteTask(el.key)}
        }
      ]

  return (
      <SwipeOut  right={swipeOutBtns}>
        <TouchableOpacity style={styles.container} onPress={() => setCompleted(el.key)}>
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

const mapStateToProps = state => {
  return {
    listOfTasks: state.list.tasks
  };
}


const mapDispatchToProps = {
  setCompleted: setCompleted,
  deleteTask: deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)