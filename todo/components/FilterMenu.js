import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

const FilterMenu = ({setFilterValue, countOfActive, countOfCompleted}) => {


  return (
    <View style = {styles.container}>
        <TouchableOpacity style = {styles.buttons} onPress={() => setFilterValue('all')}>
            <Text style = {styles.buttonsText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttons} onPress={() => setFilterValue('active')}>
            <Text style = {styles.buttonsText}>Active: {countOfActive}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttons} onPress={() => setFilterValue('completed')}>
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

    buttonsText:{
        color:'#7f7e7e'
    }
    
})

export default FilterMenu 