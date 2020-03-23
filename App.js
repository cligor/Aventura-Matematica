import React from 'react'

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux'

import Home from './src/pages/home'
import Menu from './src/pages/menu'
import QuestaoCeara from './src/pages/questaoCeara'

function App() {
  return (
    <Router>
      <Stack key='root'>
        <Scene key="home" component={Home} title='Inicio' initial hideNavBar />
        <Scene key="menu" component={Menu} title='Aventura Matemática' hideNavBar />
        <Scene key="questaoCeara" component={QuestaoCeara} title='' />
      </Stack>
    </Router>
  )
}

export default App
