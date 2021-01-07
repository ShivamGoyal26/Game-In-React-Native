import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = () => {
    // const [value, onChangeText] = React.useState('');

    const [enteredValue, setEnteredValue] =React.useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    return (
        <TextInput
            autoCorrect={false}
            placeholder={"Enter any Number"}
            keyboardType={'number-pad'}
            style={styles.input}
            onChangeText={text => numberInputHandler(text)}
            value={enteredValue}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }
});

export default CustomTextInput;