import type { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Introduction from '@screens/introduction'

const Drawer = createDrawerNavigator()

const Router: FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Introdução"
        screenOptions={{
          headerShown: false,
          drawerContentStyle: {
            backgroundColor: '#1e1e1e'
          }
        }}
      >
        <Drawer.Screen name="Introdução" component={Introduction} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Router
