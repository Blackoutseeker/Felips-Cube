import type { FC } from 'react'
import type ScreenProps from '@models/screen'
import type Cube from '@models/cube'
import { StatusBar } from 'expo-status-bar'
import CubeCard from '@components/CubeCard'
import { ScreenContainer, CubesList, Description } from './styles'

interface MainProps {
  screenProps: ScreenProps
}

const Main: FC<MainProps> = ({ screenProps }) => {
  return (
    <ScreenContainer>
      <StatusBar style="auto" translucent={false} />
      <CubesList
        ListHeaderComponent={
          <Description>{screenProps.description}</Description>
        }
        data={screenProps.cubes}
        renderItem={({ item }) => <CubeCard cube={item as Cube} />}
      />
    </ScreenContainer>
  )
}

export default Main
