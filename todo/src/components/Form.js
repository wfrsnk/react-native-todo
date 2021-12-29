import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { createTask } from '../redux/actions';
import uuid from 'react-native-uuid';

const Form = ({createTask, listOfTasks}) => {

    const inputMaxLength = 10;
    const [text, setTextValue] = useState('');
    const [inputBorder, setInputBorder] = useState(false);

    const warning = () => {
        setTimeout(()=>{
            setInputBorder(false);
        }, 1000)
    }

    const onChange = (text) => {
        setTextValue(text);
    }

    const hasDuplicate = (text) =>{
        let flag = false;
        listOfTasks.forEach((el)=> {
            if(el.text === text)
                flag = true;
        })
        return flag;
    }

    const createNewTask = (text) =>{
        const isDuplicate = hasDuplicate(text)
        if(!isDuplicate) {
            const newTask = {text: text, key: uuid.v4(), completed: false};
            createTask(newTask);
            setTextValue('');
        } else {
            setInputBorder(true);
            warning();
        }
            

    }

  return (
    <View style = {styles.Form}>
        <View style={styles.container}>
            <TextInput style={inputBorder ? styles.inputRedBorder : styles.input} onChangeText={onChange} placeholder='New task' value={text}/>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                if(text.length <= inputMaxLength && text != '') {
                    createNewTask(text);
                } else {
                    setInputBorder(true)
                    warning();
                }
            }}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
        <Text style = {styles.noteText} >*max. length of task is {inputMaxLength} symbols</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    form: {
        flex:1
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#cacaca',
        borderTopWidth: 1,
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 10,
        width: '70%',
        margin: 10,
        padding: 10,
    },

    inputRedBorder: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        width: '70%',
        margin: 10,
        padding: 10,
    },

    button: {
        backgroundColor: '#BEFCE5',
        marginRight: 20,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#aaa',
        width: '20%',
        margin: 10,
        padding: 10,
    },

    buttonText: {
        color: '#00a0aa',
        textAlign: 'center',
    },

    noteText: {
        marginLeft:15,
        color: '#ccc',
    }
})

const mapDispatchToProps = {
    createTask: createTask
}

const mapStateToProps = state => {
    return {
      listOfTasks: state.list.tasks,
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Form) 