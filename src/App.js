import React, { useState } from 'react'
import TopNavBar from './components/TopNavBar'
import './App.css'
import Banner from './components/Banner'
import Menu from './components/Menu'
import PickOfTheWeek from './components/PickOfTheWeek'
import ContanctUs from './components/ContanctUs'
import CopyRight from './components/CopyRight'

const App = () => {
  const [cartItem,setCartItem]=useState([]);

  function handleCartItem(item){
   if(cartItem.indexOf(item)!==-1) return;
   setCartItem((prevCartItems) => [...prevCartItems, item]);
  }


  const handleChange=(item,d)=>{
    const ind=cartItem.indexOf(item);
    const arr=cartItem;
    arr[ind].amount+=d;
    
    if(arr[ind].amount===0){
      arr[ind].amount=1;
    }
    
    setCartItem([...arr])
  }
  return (
    <div>
      <TopNavBar cartItem={cartItem} setCartItem={setCartItem} handleChange={handleChange}/>
      <Banner/>
      <Menu handleCartItem={handleCartItem}/>
      <PickOfTheWeek/>
      <ContanctUs/>
      <CopyRight/>
    </div>
  )
}

export default App
