import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import OrchestrationPage from './pages/OrchestrationPage'

const App = () => {
  return (
    <BrowserRouter>
      <OrchestrationPage />
    </BrowserRouter>
  )
}
export default App
