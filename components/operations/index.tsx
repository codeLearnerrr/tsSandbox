interface Props {
    firstNumber: number;
    secondNumber: number;
}

const AddOperation = (props: Props): number => {
    const result = props.firstNumber + props.secondNumber;

    return parseFloat(result.toFixed(2));
}

const SubtractOperation = (props: Props): number => {
    const result = props.firstNumber - props.secondNumber;

    return parseFloat(result.toFixed(2));
}

const DivideOperation = (props: Props): number => {
    const result = props.firstNumber / props.secondNumber;

    return parseFloat(result.toFixed(2));
}

const MultiplyOperation = (props: Props): number => {
    const result = props.firstNumber * props.secondNumber;

    return parseFloat(result.toFixed(2));
}

export { AddOperation, SubtractOperation, DivideOperation, MultiplyOperation };
