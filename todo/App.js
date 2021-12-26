import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItems from './components/ListItems';
import Form from './components/Form';

const App = () => {

  const [listOfItems, setListOfItems] = useState([
    {text:'do Smth 1', key:'1', completed: false},
    {text:'do Smth 2', key:'2', completed: false},
    {text:'do Smth 3', key:'3', completed: false}
  ]);

  const addHandler = (text) => {
    setListOfItems( (list) => {
      return [
        {text: text, key: uuid.v4(), completed: false},
        ...list
      ]
    })
  }

  const completedHandler = (key) => {
    const updateList = listOfItems.map(item => {
      if (item.key === key){
        item.completed = !item.completed;
      } 
      return item;    
    })
    setListOfItems(updateList)
  }
  

  const deleteHandler = (key) => {
    setListOfItems( (list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View style = {styles.section}>
      <Header/>
    
      <FlatList data={listOfItems} renderItem={({item}) => (
        <ListItems el = {item} 
        deleteHandler = {deleteHandler}
        completedHandler = {completedHandler}
        />
      )}/>
      <Form addHandler={addHandler}/>
    </View>
  )
}
const styles = StyleSheet.create({
  section: {
    paddingBottom: 80,
    flex:1
  }
})
export default App