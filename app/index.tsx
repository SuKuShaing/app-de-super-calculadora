import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
	return (
		<View style={globalStyles.calculatorContainer}>
			<ThemeText variant="h1">50x50</ThemeText>

			<ThemeText variant="h2">2500</ThemeText>

			<ThemeText variant="p">Hola Mundo</ThemeText>
		</View>
	);
};

export default CalculatorApp;
