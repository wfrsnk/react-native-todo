import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.h1}>Список дел</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    backgroundColor: '#BEFCE5',
  },
  
  h1: {

    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 20,
    textAlign: 'center'
  }
})

export default Header