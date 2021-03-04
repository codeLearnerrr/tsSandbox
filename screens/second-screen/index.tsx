import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import {
    AddOperation,
    SubtractOperation,
    DivideOperation,
    MultiplyOperation
} from '../../components/operations'

import randomImage from '../../assets/image.jpg';

const resultAdd = AddOperation({ firstNumber: 5, secondNumber: 5 })
const resultSub = SubtractOperation({ firstNumber: 10, secondNumber: 5 })
const resultDiv = DivideOperation({ firstNumber: 10, secondNumber: 5 })
const resultMult = MultiplyOperation({ firstNumber: 10, secondNumber: 5 })

export const ShowSomething2 = ({ navigation }: any) => {
    return (
        <>
            <Image resizeMethod='resize' resizeMode='contain' source={randomImage} style={{ width: 50, height: 50 }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Second screen!
                    Addition: {resultAdd}{'\n'}
                    Sub: {resultSub}{'\n'}
                    Div: {resultDiv}{'\n'}
                    Mult: {resultMult}{'\n'}
                </Text>
            </View>
        </>
    )
}


