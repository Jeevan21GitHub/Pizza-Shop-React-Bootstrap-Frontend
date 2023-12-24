import React, { useEffect, useState } from "react";

import ListGroup from 'react-bootstrap/ListGroup';

import { Button } from "react-bootstrap";
import Data from "../data"

const CartItems = (props) => {
  const handleRemove=(id)=>{
    const arr=props.cartItem.filter((item)=>(item.id!==id));
  
    props.setCartItem(arr);
    handlePrice();
  }
  const handlePrice=()=>{
    let ans=0;
    props.cartItem.map((item)=>(ans+=item.amount*item.price));
    props.setPrice(ans);
  }
  const RefreshAmount=(item)=>{
    const ind = props.cartItem.findIndex((i) => i.id === item.id);
    const arr = [...props.cartItem];
    if (ind !== -1) {
      arr[ind].amount = 1;
      
    }
  }
  useEffect(()=>{
    handlePrice();
   
  }, [props.cartItem])
  return (
    <>
      {
        props.cartItem.map((item,count) => (
          <ListGroup as="ol" key={item.id}>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{count+++1}. {item.Title}</div>
            </div>
            <Button variant="secondary" onClick={()=>{props.handleChange(item,-1)}}>-</Button>
            <Button variant="primary" className="w-15 mx-1">{item.amount}</Button>
            <Button variant="secondary" onClick={()=>{props.handleChange(item,1)}}>+</Button>
            <Button variant="success" className="w-15 ms-1">${item.price}</Button>
            <Button variant="danger" className="w-15 ms-1" onClick={()=>{handleRemove(item.id);RefreshAmount(item)}}><i className="bi bi-trash3-fill"></i></Button>
          </ListGroup.Item>
          </ListGroup>
        ))
      }
    </>


  );
};

export default CartItems;
