import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItems from './components/ListItems';
import Form from './components/Form';

const App = () => {

  const [listOfItems, setListOfItems] = useState([
    {text:'do Smth 1', key:'1'},
    {text:'do Smth 2', key:'2'},
    {text:'do Smth 3', key:'3'}
  ]);

  const addHandler = (text) => {
    setListOfItems( (list) => {
      return [
        {text: text, key: uuid.v4()},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems( (list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View >
      <Header/>
    
      <FlatList data={listOfItems} renderItem={({item}) => (
        <ListItems el = {item} deleteHandler={deleteHandler}/>
        // <Text>{item.text}</Text>
      )}/>
      <Form addHandler={addHandler}/>
    </View>
  )
}

export default App