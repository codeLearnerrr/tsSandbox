import React from 'react'
import { Text } from 'react-native'
import {
    SumOperation,
    SubtractOperation,
    DivideOperation,
    MultiplyOperation
} from '../../components/operations'

const resultSum = SumOperation({ firstNumber: 5, secondNumber: 5 })
const resultSub = SubtractOperation({ firstNumber: 10, secondNumber: 5 })
const resultDiv = DivideOperation({ firstNumber: 10, secondNumber: 5 })
const resultMult = MultiplyOperation({ firstNumber: 10, secondNumber: 5 })

export const ShowSomething = () => {
    return (
        <>
            <Text>
                Sum: {resultSum}{'\n'}
                Sub: {resultSub}{'\n'}
                Div: {resultDiv}{'\n'}
                Mult: {resultMult}{'\n'}
            </Text>
        </>
    )
}

