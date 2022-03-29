import { Typography } from 'antd'
import React, { useState } from 'react'
import { ProductsFromDB } from '../../constants/productsFromDB'
import { ProductsAdd } from './ProductsAdd/ProductsAdd'
import { ProductList } from './ProductsList/ProductList'

const newProduct = {
  name: 'Café dolca',
  price: 500,
  quantity: 15,
  stock: true,
  _id: "algo"
}

export const Products = () => {
  const [products, productsState] = useState(ProductsFromDB)

  const updateProducts = (nuevoProducto) => {
    const newArray = [...products, newProduct]
    productsState(newArray)
  }

  const deleteProduct = (id) => {
    const newArray = products.filter(prod => prod._id !== id)
    productsState(newArray)
  }

  return (
    <div>
      <Typography.Title level={1}>Products</Typography.Title>

      <ProductsAdd />
      <ProductList productsDBToList={products} deleteProduct={deleteProduct} />
      <button onClick={() => updateProducts()}>Añadir</button>
    </div>
  )
}
