import React from 'react';
import { View, StyleSheet} from 'react-native';

import Header from './src/components/Header';
import ListItems from './src/components/ListItems';
import FilterMenu from './src/components/FilterMenu';
import Form from './src/components/Form';

import {createStore} from 'redux';
import { rootReducer } from './src/redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const App = () => {

  return (
    <Provider store = {store}>
      <View style = {styles.section}>
        <Header/>
        <ListItems/>
        <FilterMenu/>
        <Form />
      </View>
    </Provider>
  )
}
const styles = StyleSheet.create({
  section: {
    paddingBottom: 50,
    flex:1
  }
})


export default App