import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItems from './components/ListItems';
import FilterMenu from './components/FilterMenu';
import Form from './components/Form';

const App = () => {

  const [listOfItems, setListOfItems] = useState([
    {text:'do Smth 1', key:'1', completed: false},
    {text:'do Smth 2', key:'2', completed: false},
    {text:'do Smth 3', key:'3', completed: false}
  ]);

  const [filterValue, setFilterValue] = useState('all');

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
      return list.filter(el => el.key != key)
    })
  }

  const filterList = () => {
    switch (filterValue) {
      case 'completed': 
        return listOfItems.filter(el => el.completed === true);
     case 'active': 
        return listOfItems.filter(el => el.completed === false);
      default: 
        return listOfItems;
    }
  }

  const activeCounter = () => {
    let count = 0;
    listOfItems.forEach(el => {
      if(el.completed === false)
        count++;
    })
    return count;
  }

  const completedCounter = () => {
    let count = 0;
    listOfItems.forEach(el => {
      if(el.completed === true)
        count++;
    })
    return count;
  }

  const filteredList = filterList();
  const countOfActive = activeCounter();
  const countOfCompleted = completedCounter();

  return (
    <View style = {styles.section}>
      <Header/>
    
      <FlatList data={filteredList} renderItem={({item}) => (
        <ListItems el = {item} 
        deleteHandler = {deleteHandler}
        completedHandler = {completedHandler}
        />
      )}/>
      <FilterMenu 
        setFilterValue = {setFilterValue}
        countOfActive={countOfActive}
        countOfCompleted={countOfCompleted}/>
      <Form addHandler={addHandler} />
    </View>
  )
}
const styles = StyleSheet.create({
  section: {
    paddingBottom: 50,
    flex:1
  }
})
export default App