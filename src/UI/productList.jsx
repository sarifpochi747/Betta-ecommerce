import React from 'react'



import ProductCart from './productCart'
export default function productList({data}) {
  return (
    <>

    {
      data?.map((item,index) =>(
        <ProductCart item={item} key={index}/>
      ))
    }
    </>
  )
}
