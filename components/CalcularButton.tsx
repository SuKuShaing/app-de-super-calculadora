import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
import * as NavigationBar from "expo-navigation-bar";
import { Platform, Pressable, Text } from "react-native";

const isAndroid = Platform.OS === "android";
if (isAndroid) {
	NavigationBar.setBackgroundColorAsync("black"); // solo para Android
	NavigationBar.setBorderColorAsync("red");
}

interface Props {
	label: string;
	color?: string;
	blackText?: boolean;
	doubleSize?: boolean;
	onPress?: () => void;
}

const CalcularButton = ({
	label,
	color = Colors.darkGray,
	blackText = false,
	doubleSize = false,
	onPress,
}: Props) => {
	return (
		<Pressable
			style={({ pressed }) => ({
				...globalStyles.button,
				backgroundColor: color,
				opacity: pressed ? 0.8 : 1,
				width: doubleSize ? 180 : 80,
			})}
			// {...globalStyles.buttonText, se coloca primero, entonces al llegar los props de color sobre escriben los valores que globalStyles trajo}
			onPress={() => {
				Haptics.selectionAsync(),
				onPress?.();
			}}
		>
			<Text
				style={{
					...globalStyles.buttonText,
					color: blackText ? Colors.background : Colors.textPrimary,
				}}
			>
				{label}
			</Text>
		</Pressable>
	);
};

export default CalcularButton;
