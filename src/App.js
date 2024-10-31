import React from 'react'
import "./App.css"
import PageContainer from './container/PageContainer'
import Header from './components/Header'

import RouterConfig from './config/RouterConfig'

const App = () => {
  return (
    <div>
      <PageContainer>
        <Header/>
        <RouterConfig/>

      </PageContainer>

    </div>
  )
}

export default App