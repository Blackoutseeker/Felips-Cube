import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const DrawerButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  width: 52px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
