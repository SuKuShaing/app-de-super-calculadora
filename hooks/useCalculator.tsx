import { useEffect, useRef, useState } from "react";

enum Operator {
	add = "+",
	substract = "-",
	multiply = "*",
	divide = "÷",
}

export const useCalculator = () => {
	const [formula, setFormula] = useState<string>("0"); // Formula que se muestra en la pantalla
	const [number, setNumber] = useState<string>("0"); // Número actual
	const [prevNumber, setPrevNumber] = useState<string>("0"); // Número previo
	const lastOperation = useRef<Operator | undefined>(undefined); // useRef almacena valores mutables sin generar re-render del componente

	useEffect(() => {
		if( lastOperation.current ) {
			const firstFormulaPart = formula.split(' ').at(0);
			setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
		} else {
			setFormula(number);
		}
	}, [number]);

	useEffect(() => {
		// ToDo: Calcular el subResultado
		// setFormula(number);
	}, [number]);

	const clean = () => {
		setNumber("0");
		setPrevNumber("0");
		setFormula("0");
		lastOperation.current = undefined;
	};

	const toggleSing = () => {
		if (number.startsWith('-')) {
			return setNumber(number.replace('-',''));
		};

		return setNumber('-' + number);
	};

	const deleteLast = () => {
		if (number.length === 2 && number.startsWith("-")) {
			return setNumber("0");
		}

		if (number.length === 1) {
			return setNumber("0");
		}

		return setNumber(number.slice(0, -1));
	};

	const setLastNumber = () => {
		if ( number.endsWith('.')) {
			setPrevNumber(number.slice(0,-1))
		}
		
		// to do, calculate resultate

		setPrevNumber(number)
		setNumber('0')
	}

	const divideOperation = () => {
		setLastNumber();
		lastOperation.current = Operator.divide;
	}

	const multiplyOperation = () => {
		setLastNumber();
		lastOperation.current = Operator.multiply;
	}

	const addOperation = () => {
		setLastNumber();
		lastOperation.current = Operator.add;
	}

	const substractOperation = () => {
		setLastNumber();
		lastOperation.current = Operator.substract;
	}

	const buildNumber = (numberString: string) => {
        console.log(numberString);

		// Verificar sí ya existe un punto decimal
		if (number.includes(".") && numberString === ".") return;

		// Verificar sí el número existente empieza con 0 o -0
		if (number.startsWith("0") || number.startsWith("-0")) {
			// añadir un punto, cuando el primer número es 0
			if (numberString === ".") {
				return setNumber(number + numberString);
			}

			// Evaluar sí es otro cero y no hay punto
			// if (numberString === "0" && number.includes(".")) {
			// 	return setNumber(number + numberString);
			// }

            // Evaluar sí es diferente de cero, no hay punto y es el primer número
			if (numberString !== "0" && number.startsWith("-0") && !number.includes(".")) {
				return setNumber("-" + numberString);
			}

            // Evaluar sí es diferente de cero, no hay punto y es el primer número
			if (numberString !== "0" && !number.includes(".")) {
				return setNumber(numberString);
			}

            // Evitar el 000000
			if (numberString === "0" && !number.includes(".")) {
				return;
			}
		}

		setNumber(number + numberString);
	};

	return {
		// Properties
		formula,
		number,
		prevNumber,

		// Methods
		buildNumber,
		clean,
		toggleSing,
		deleteLast,
		divideOperation,
		multiplyOperation,
		addOperation,
		substractOperation,
	};
};
