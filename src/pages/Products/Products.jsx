import React from 'react'
import { ProductList } from './ProductsList/ProductList'

export const Products = ({ productsDB }) => {
  return (
    <div>
        <h1>Products</h1>
        <h4>LISTA DE DESTACADOS</h4>
        <h4>LISTA DE FILSTRO</h4>
        <h4>RECOMENDADOS</h4>
        <ProductList productsDBToList={productsDB}/>
    </div>
  )
}
