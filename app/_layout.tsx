// _layout.tsx está esperando un componente por defecto 'RootLayout'
// se le coloca RootLayout porque es la base y todos pasarán por ahí

// la carpeta app es la carpeta de rutas y los componentes no van con mayúsculas al inicio

import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const RootLayout = () => {
	const [loaded] = useFonts({
		// tomamos loaded para saber sí ya se cargó la fuente
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	if (!loaded) {
		// Verifica sí está cargado la fuente, con esto se quita un warning que avisa que usamos la fuente antes de estar cargada
		return null;
	}

	return (
		<View style={ globalStyles.background }>
			{/* Flex: 1 funciona y se expande hacia abajo porque 
			En React Native (incluido cuando trabajas con Expo) todas las vistas (View, ScrollView, etc.) usan Flexbox por defecto, la propiedad está preconfigurada como display: 'flex' y flexDirection: 'column', por defecto
			*/}
			<Slot />

			<StatusBar style="light" />
			{/* StatusBar, para que se vea la Barra de Status del dispositivo */}
		</View>
	);
};

export default RootLayout;
