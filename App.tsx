import 'react-native-gesture-handler'
import type { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import darkTheme from '@styles/themes/dark'
import Router from '@router/index'

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
