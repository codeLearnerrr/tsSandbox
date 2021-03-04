import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Button
} from 'react-native'
import {
    AddOperation,
    SubtractOperation,
    DivideOperation,
    MultiplyOperation
} from '../../components/operations'

import randomImage from '../../assets/image.jpg';
import { TextInput } from 'react-native-gesture-handler';


export const ShowSomething = ({ navigation }: any) => {
    const [firstValue, setFirstValue] = useState<number>(0);
    const [secondValue, setSecondValue] = useState<number>(0);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {/* <Button title='go to second screen' onPress={() => navigation.navigate('NotHome')} /> */}

            < Image
                resizeMethod='resize'
                resizeMode='contain'
                source={randomImage}
                style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10, marginTop: 10 }
                }
            />

            <Text style={{ fontSize: 30, marginBottom: 30, textAlign: 'center' }}>
                Type numbers in{'\n'} each grey box to calculate:
                </Text>

            <View style={{ flex: 1, flexDirection: 'column', maxHeight: 100, }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput placeholder='' keyboardType='numeric' style={{
                        borderColor: 'grey',
                        borderBottomWidth: 1,
                        backgroundColor: 'rgba(0,0,0,.1)',
                        maxHeight: 70,
                        maxWidth: 70,
                        width: 70,
                        borderRadius: 8,
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                        onChangeText={(input) => setFirstValue(parseInt(input))}
                    />
                    <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{''}</Text>
                    <TextInput placeholder='' keyboardType='numeric' style={{
                        borderColor: 'grey',
                        borderBottomWidth: 1,
                        backgroundColor: 'rgba(0,0,0,.1)',
                        maxHeight: 70,

                        maxWidth: 70,
                        width: 70,
                        borderRadius: 8,
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                        onChangeText={(input) => setSecondValue(parseInt(input))}
                    />

                </View>

            </View>

            <View style={{ flex: 1, maxHeight: 200, maxWidth: 300, }}>

                <Text numberOfLines={1} style={{ fontSize: 25, }}>Addition: {AddOperation({ firstNumber: firstValue, secondNumber: secondValue })}</Text>
                <Text numberOfLines={1} style={{ fontSize: 25, }}>Subtraction: {SubtractOperation({ firstNumber: firstValue, secondNumber: secondValue })} </Text>
                <Text numberOfLines={1} style={{ fontSize: 25, }}>Division: {DivideOperation({ firstNumber: firstValue, secondNumber: secondValue })} </Text>
                <Text numberOfLines={1} style={{ fontSize: 25, }}>Multiplication: {MultiplyOperation({ firstNumber: firstValue, secondNumber: secondValue })} </Text>

            </View>

        </View>
    )
}

