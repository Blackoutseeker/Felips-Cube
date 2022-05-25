import type { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@utils/constants'
import AppIcon from '@assets/images/appIcon.png'
import {
  DrawerContainer,
  DrawerHeader,
  DrawerHeaderImage,
  DrawerItem,
  DrawerItemText
} from './styles'

interface Navigation {
  navigate: (route: string) => void
}

const Drawer: FC = () => {
  const navigation = useNavigation<Navigation>()

  const handleNavigate = (route: string) => {
    navigation.navigate(route)
  }

  const drawerItems = routes.map(route => (
    <DrawerItem key={route} onPress={() => handleNavigate(route)}>
      <DrawerItemText>{route}</DrawerItemText>
    </DrawerItem>
  ))

  return (
    <DrawerContainer>
      <DrawerHeader>
        <DrawerHeaderImage source={AppIcon} />
      </DrawerHeader>
      {drawerItems}
    </DrawerContainer>
  )
}

export default Drawer
