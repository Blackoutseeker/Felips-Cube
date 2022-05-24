import type { FC } from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { HeaderContainer, DrawerButton, HeaderTitle } from './styles'

const Header: FC = () => {
  const navigation = useNavigation()

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <HeaderContainer>
      <DrawerButton onPress={openDrawer}>
        <FontAwesome5 name="bars" size={20} color="#fff" />
      </DrawerButton>
      <HeaderTitle>Felip&apos;s Cube</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
