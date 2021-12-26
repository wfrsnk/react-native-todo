import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const Form = ({addHandler}) => {
    const [text, setTextValue] = useState('');

    const onChange = (text) => {
        setTextValue(text);
    }

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Новая задача'/>
        <Button color={'#aaa'} onPress={() => addHandler(text)} title='Добавить'/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#cacaca',
        borderTopWidth: 1,
        marginTop: 10,
        padding: 10,

    }
})

export default Form 