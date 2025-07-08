// _layout.tsx está esperando un componente por defecto
// se le coloca RootLayout porque es la base y todos pasarán por ahí

// la carpeta app es la carpeta de rutas y los componentes no van con mayúsculas al inicio

import { Slot } from 'expo-router'
import { Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View>
      <Text>Header</Text>

      <Slot />
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout