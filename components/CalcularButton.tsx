import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { Pressable, Text } from "react-native";

interface Props {
	label: string;
	color?: string;
	blackText?: boolean;
	onPress?: () => void;
}

const CalcularButton = ({
	label,
	color = Colors.darkGray,
	blackText = false,
	onPress,
}: Props) => {
	return (
		<Pressable style={{...globalStyles.button, backgroundColor: color}} onPress={onPress}>
			<Text style={{...globalStyles.buttonText, color: blackText ? Colors.background : Colors.textPrimary}}>{label}</Text>
            {/* {...globalStyles.buttonText, se coloca primero, entonces al llegar los props de color sobre escriben los valores que globalStyles trajo} */}
		</Pressable>
	);
};

export default CalcularButton;
