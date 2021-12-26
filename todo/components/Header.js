import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.h1}>ToDo List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    backgroundColor: '#BEFCE5',
  },
  
  h1: {

    color: '#00a0aa',
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 20,
    textAlign: 'center'
  }
})

export default Header