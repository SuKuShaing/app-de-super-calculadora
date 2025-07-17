import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    substract = '-',
    multiply = '*',
    divide = '÷',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState<string>('0'); // Formula que se muestra en la pantalla
    const [number, setNumber] = useState<string>('0'); // Número actual
    const [prevNumber, setPrevNumber] = useState<string>('0'); // Número previo
	const lastOperation = useRef<Operator>(); // useRef almacena valores mutables sin generar re-render del componente

    useEffect(() => {
        // ToDo: Calcular el subResultado
        setFormula(number);
    }, [number]);

    const buildNumber = ( numberString: string ) => {
        console.log(numberString);
    }

    return {
        // Properties
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
    }
};
