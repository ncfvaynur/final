import { colors } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartItem = () => {

    const selector = useSelector((state)=> state.cartItems )

  return (
    <>
        <Link style={{color: "white"}} to={"/cart"}>({selector.length}) </Link>
    </>
  )
}

export default CartItem