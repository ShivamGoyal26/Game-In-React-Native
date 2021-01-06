import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import Card from '../components/Card';
import CustomButton from '../components/Button';
import Colors from '../constants/colors'
import colors from '../constants/colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] =  useState(false);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        setEnteredValue('');
    };

    const confirmInputHandler = () => {
        setConfirmed(true);
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
             <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                {/* Here add the input thing  */}

                <View style={styles.buttonContainer}>
                    <CustomButton title="Reset" colorCode={Colors.accent} action={resetInputHandler} />
                    <CustomButton title="Confirm" colorCode={colors.primary} />
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
       

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    // button: {
    //     width: 100,
    // },
});

export default StartGameScreen;