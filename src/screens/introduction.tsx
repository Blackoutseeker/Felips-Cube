import type { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import Header from '@components/Header'
import { ScreenContainer } from './styles'

const Introduction: FC = () => {
  return (
    <ScreenContainer>
      <StatusBar style="auto" translucent={false} />
      <Header />
    </ScreenContainer>
  )
}

export default Introduction
