import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import Task from './Task';


const ListItems = ( {listOfTasks, filter} ) => {

  const filterList = () => {
    switch (filter) {
      case 'completed': 
        return listOfTasks.filter(el => el.completed === true);
     case 'active': 
        return listOfTasks.filter(el => el.completed === false);
      default: 
        return listOfTasks;
    }
  }

  const filteredListOfTasks = filterList();

  if(!listOfTasks.length) {
    return (
      <View style = {styles.emptyContainer}>
        <Text style = {styles.emptyContainerText}>List is empty</Text>
      </View>
    )
  } else {
      return (
        <FlatList data={filteredListOfTasks} renderItem={({item}) => (
        <Task el = {item}/>
      )}/>
    )
  }
}

const styles = StyleSheet.create({
    emptyContainer: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
    },

    emptyContainerText: {
      fontSize: 16,
      color: '#ccc',
    }
})

const mapStateToProps = state => {
  return {
    listOfTasks: state.list.tasks,
    filter: state.list.filter
  };
}

export default connect(mapStateToProps, null)(ListItems)