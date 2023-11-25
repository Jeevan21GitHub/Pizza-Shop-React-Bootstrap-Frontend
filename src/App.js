import React from 'react'
import TopNavBar from './components/TopNavBar'
import './App.css'
import Banner from './components/Banner'
import Menu from './components/Menu'
import PickOfTheWeek from './components/PickOfTheWeek'
import ContanctUs from './components/ContanctUs'
import CopyRight from './components/CopyRight'

const App = () => {
  return (
    <div>
      <TopNavBar/>
      <Banner/>
      <Menu/>
      <PickOfTheWeek/>
      <ContanctUs/>
      <CopyRight/>
    </div>
  )
}

export default App
