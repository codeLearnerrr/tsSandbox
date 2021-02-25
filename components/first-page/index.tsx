import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface Props {
    firstNumber: number;
    secondNumber: number;
}

const PlusOperation: FC<Props> = (props) => {
    console.log(props.firstNumber)
    return (
        <>
            <Text>
                {props.firstNumber}
            </Text>
        </>
    )
}

PlusOperation({ firstNumber: 2, secondNumber: 3 })

export default PlusOperation;
