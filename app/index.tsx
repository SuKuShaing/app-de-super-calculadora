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

			{/* 1ra Fila de botones */}
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
					onPress={() => console.log("7")}
				/>
				<CalcularButton
					label="8"
					onPress={() => console.log("8")}
				/>
				<CalcularButton
					label="9"
					onPress={() => console.log("9")}
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
					onPress={() => console.log("4")}
				/>
				<CalcularButton
					label="5"
					onPress={() => console.log("5")}
				/>
				<CalcularButton
					label="6"
					onPress={() => console.log("6")}
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
					onPress={() => console.log("1")}
				/>
				<CalcularButton
					label="2"
					onPress={() => console.log("2")}
				/>
				<CalcularButton
					label="3"
					onPress={() => console.log("3")}
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
					onPress={() => console.log("0")}
				/>
				<CalcularButton
					label="."
					onPress={() => console.log(".")}
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
