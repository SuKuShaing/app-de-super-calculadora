import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

const CalculatorApp = () => {
	return (
		<View style={globalStyles.calculatorContainer}>
			<Text
				style={globalStyles.mainResult}
				// numberOfLines={1} numero de lineas, por ejemplo para que no pase para abajo sí hay mucho texto
				// adjustsFontSizeToFit que la letra se achique para que calce
			>
				50x50
			</Text>

			<Text style={globalStyles.subResult}>2500</Text>
		</View>
	);
};

export default CalculatorApp;
