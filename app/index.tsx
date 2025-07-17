import CalcularButton from "@/components/CalcularButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {

	const { formula, buildNumber } = useCalculator();

	return (
		<View style={globalStyles.calculatorContainer}>
			{/* Resultados */}
			<View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
				<ThemeText variant="h1">{formula}</ThemeText>

				<ThemeText variant="h2">2500</ThemeText>
			</View>

			{/* 1ra Fila de botones */}
			<View style={globalStyles.row}>
				<CalcularButton
					label="C"
					blackText
					color={Colors.lightGray}
					onPress={() => buildNumber("C")}
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
					color={Colors.orange}
					onPress={() => {
						"÷";
					}}
				/>
			</View>

			{/* 2da Fila de botones */}
			<View style={globalStyles.row}>
				<CalcularButton
					label="7"
					onPress={() => buildNumber("7")}
				/>
				<CalcularButton
					label="8"
					onPress={() => buildNumber("8")}
				/>
				<CalcularButton
					label="9"
					onPress={() => buildNumber("9")}
				/>
				<CalcularButton
					label="x"
					color={Colors.orange}
					onPress={() => console.log("x")}
				/>
			</View>

			{/* 3ra Fila de botones */}
			<View style={globalStyles.row}>
				<CalcularButton
					label="4"
					onPress={() => buildNumber("4")}
				/>
				<CalcularButton
					label="5"
					onPress={() => buildNumber("5")}
				/>
				<CalcularButton
					label="6"
					onPress={() => buildNumber("6")}
				/>
				<CalcularButton
					label="-"
					color={Colors.orange}
					onPress={() => console.log("-")}
				/>
			</View>

			{/* 4ta Fila de botones */}
			<View style={globalStyles.row}>
				<CalcularButton
					label="1"
					onPress={() => buildNumber("1")}
				/>
				<CalcularButton
					label="2"
					onPress={() => buildNumber("2")}
				/>
				<CalcularButton
					label="3"
					onPress={() => buildNumber("3")}
				/>
				<CalcularButton
					label="+"
					color={Colors.orange}
					onPress={() => console.log("+")}
				/>
			</View>

			{/* 5ta Fila de botones */}
			<View style={globalStyles.row}>
				<CalcularButton
					label="0"
					doubleSize
					onPress={() => buildNumber("0")}
				/>
				<CalcularButton
					label="."
					onPress={() => buildNumber(".")}
				/>
				<CalcularButton
					label="="
					color={Colors.orange}
					onPress={() => console.log("=")}
				/>
			</View>
		</View>
	);
};

export default CalculatorApp;
