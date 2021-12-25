import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';

import Header from './components/Header';

const App = () => {

  const [list, setList] = useState([
    {text:'do Smth 1', key:'1'},
    {text:'do Smth 2', key:'2'},
    {text:'do Smth 3', key:'3'}
  ]);

  return (
    <View >
      <Header/>
    
      <FlatList data={list} renderItem={({item}) => (
        <Text>{item.text}</Text>
      )}/>
    </View>
  )
}

export default App