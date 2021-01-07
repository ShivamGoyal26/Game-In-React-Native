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

    const [enteredValue, setEnteredValue] = React.useState('');
    const [confirmed, setConfirmed] = React.useState(false);
    const [selectedNumber, setSelectedNumber] = React.useState(undefined);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };


    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        // what if there we do not add the set confirmed value 

    };



    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');

    };

    let confirmedOuput;

    if (confirmed) {
        confirmedOuput = <Text>Chosen Number: {selectedNumber}</Text>
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>

                    <CustomTextInput
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />

                    <View style={styles.buttonContainer}>
                        <CustomButton title="Reset" colorCode={Colors.accent} action={resetInputHandler} />
                        <CustomButton title="Confirm" colorCode={colors.primary} action={confirmInputHandler} />
                    </View>
                </Card>
                {confirmedOuput}
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