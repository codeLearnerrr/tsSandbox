interface Props {
    firstNumber: number;
    secondNumber: number;
}

const SumOperation = (props: Props) => {
    const result = props.firstNumber + props.secondNumber;

    return result;
}

const SubtractOperation = (props: Props) => {
    const result = props.firstNumber - props.secondNumber;

    return result;
}

const DivideOperation = (props: Props) => {
    const result = props.firstNumber / props.secondNumber;

    return result;
}

const MultiplyOperation = (props: Props) => {
    const result = props.firstNumber * props.secondNumber;

    return result;
}

export { SumOperation, SubtractOperation, DivideOperation, MultiplyOperation };
