import React from 'react'
import { useSelector } from 'react-redux';

export default function Basket() {
  const { loading, users } = useSelector(state => state.users)
  return(
    <>
      <p>Корзина</p>
    </>
  )
}