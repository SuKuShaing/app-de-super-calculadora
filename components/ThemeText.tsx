import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
	// extendemos a TextProps para que pueda recibir todos las props que Text
	// children: string; // TextProps ya tiene children

	variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const ThemeText = ({ variant = "p", children, ...rest }: Props) => {
	return (
		<Text
			style={[
				{ color: "white", fontFamily: "SpaceMono" },
				variant === "h1" && globalStyles.mainResult,
				variant === "h2" && globalStyles.subResult,
			]}
			numberOfLines={1} // numero de lineas, por ejemplo para que no pase para abajo sí hay mucho texto
			adjustsFontSizeToFit // que la letra se achique para que calce
			{...rest}
		>
			{children}
		</Text>
	);
};

export default ThemeText;
