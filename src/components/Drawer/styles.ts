import styled from 'styled-components/native'

export const DrawerContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;
`

export const DrawerHeader = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`

export const DrawerHeaderImage = styled.Image`
  width: 120px;
  height: 120px;
`

export const DrawerItem = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
`

export const DrawerItemText = styled.Text`
  color: #fff;
  font-size: 18px;
`
