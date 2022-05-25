import styled from 'styled-components/native'

export const CubeCardContainer = styled.View`
  width: 100%;
  padding: 16px;
  align-items: center;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
`

export const CubeImage = styled.Image`
  width: 157px;
  height: 200px;
`

export const CubeTitle = styled.Text`
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const CubeNote = styled.Text`
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`
