import type { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { routes } from '@utils/constants'
import Drawer from '@components/Drawer'
import Header from '@components/Header'
import Main from '@screens/main'
import { getScreenProps } from '@services/screen'

const DrawerNavigator = createDrawerNavigator()

const initialRouteName = routes[0]

const renderDrawerScreens = routes.map(route => (
  <DrawerNavigator.Screen key={route} name={route}>
    {() => <Main screenProps={getScreenProps(route)} />}
  </DrawerNavigator.Screen>
))

const Router: FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator
        initialRouteName={initialRouteName}
        drawerContent={() => <Drawer />}
        screenOptions={{
          header: () => <Header />
        }}
      >
        {renderDrawerScreens}
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Router
