import React from 'react'
import './App.css'
import AmbiguousCase from './components/AmbiguousCase'
import HeronsFormula from './components/HeronsFormula'
import NewtonsMethod from './components/NewtonsMethod'
import PolynomialFunction from './components/PolynomialFunction'

function App() {
  return (
    <div className="container">
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  )
}

export default App