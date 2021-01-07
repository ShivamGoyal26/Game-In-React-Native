import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Button,
} from 'react-native';

import Card from '../components/Card';
import CustomButton from '../components/Button';
import Colors from '../constants/colors'
import colors from '../constants/colors';
import CustomTextInput from '../components/TextInput'
import NumberContainers from '../components/NumberContainer';



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

    };



    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be in between 1 and 99',
                [{
                    text: 'Okay', style: 'destructive',
                    onPress: resetInputHandler
                }]
            )
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    };

    let confirmedOuput;

    if (confirmed) {
        confirmedOuput =
            <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
                <NumberContainers>{selectedNumber}</NumberContainers>
                <Button title="START GAME"/>
            </Card>
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
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default StartGameScreen;