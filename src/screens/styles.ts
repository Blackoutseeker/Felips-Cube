import styled from 'styled-components/native'

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`

export const CubesList = styled.FlatList`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Description = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 16px;
`
