import React from 'react';
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
import CustomTextInput from '../components/TextInput'


const StartGameScreen = props => {


    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        setEnteredValue('');
    };


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>

                    <CustomTextInput></CustomTextInput>

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