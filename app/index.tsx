import CalcularButton from "@/components/CalcularButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
	return (
		<View style={globalStyles.calculatorContainer}>
			{/* Resultados */}
			<View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
				<ThemeText variant="h1">50x50</ThemeText>

				<ThemeText variant="h2">2500</ThemeText>

				<ThemeText variant="p">Hola Mundo</ThemeText>
			</View>

			{/* Fila de botones */}
			<View style={globalStyles.row}>
				<CalcularButton
					label="C"
					blackText
					color={Colors.lightGray}
					onPress={() => {
						"C";
					}}
				/>
				<CalcularButton
					label="+/-"
					blackText
					color={Colors.lightGray}
					onPress={() => {
						"+/-";
					}}
				/>
				<CalcularButton
					label="del"
					blackText
					color={Colors.lightGray}
					onPress={() => {
						"del";
					}}
				/>
				<CalcularButton
					label="÷"
					onPress={() => {
						"÷";
					}}
				/>
			</View>
		</View>
	);
};

export default CalculatorApp;
