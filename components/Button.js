import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const CustomButton = props => {
    return (
        <View style={styles.button}>
            <Button title={props.title} onPress={props.action} color={props.colorCode} />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 100,
    },

});

export default CustomButton;


