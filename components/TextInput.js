import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = props => {

    return (
        <TextInput
            autoCorrect={false}
            placeholder={"Enter any Number"}
            keyboardType={'number-pad'}
            style={styles.input}
            onChangeText={text => props.onChangeText(text)}
            value={props.value}
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