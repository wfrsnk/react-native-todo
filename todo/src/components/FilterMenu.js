import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

const FilterMenu = ({listOfTasks, setFilter, filter}) => {
    const activeCounter = () => {
        let count = 0;
        listOfTasks.forEach(el => {
          if(el.completed === false)
            count++;
        })
        return count;
    }

    const completedCounter = () => {
      let count = 0;
      listOfTasks.forEach(el => {
        if(el.completed === true)
          count++;
      })
      return count;
    }

    const countOfActive = activeCounter();
    const countOfCompleted = completedCounter();

  return (
    <View style = {styles.container}>
        <TouchableOpacity style = {filter === 'all' ? styles.selectedButtons : styles.buttons} onPress={() => setFilter('all')}>
            <Text style = {styles.buttonsText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {filter === 'active' ? styles.selectedButtons : styles.buttons} onPress={() => setFilter('active')}>
            <Text style = {styles.buttonsText}>Active: {countOfActive}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {filter === 'completed' ? styles.selectedButtons : styles.buttons} onPress={() => setFilter('completed')}>
            <Text style = {styles.buttonsText}>Completed: {countOfCompleted}</Text>
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#cacaca',
        borderTopWidth: 1
    },

    buttons: {
        borderWidth: 1,
        borderColor: '#cacaca',
        padding: 5,
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        backgroundColor: '#fff'
    }, 

    selectedButtons: {
        borderWidth: 1,
        borderColor: '#00a0aa',
        padding: 5,
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        backgroundColor: '#fff'
    }, 

    buttonsText:{
        color:'#7f7e7e'
    }
    
})


const mapStateToProps = state => {
    return {
      listOfTasks: state.list.tasks,
      filter: state.list.filter
    };
  }


const mapDispatchToProps = {
    setFilter: setFilter
  }
export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu) 