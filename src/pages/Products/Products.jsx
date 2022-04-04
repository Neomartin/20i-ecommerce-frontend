import { Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductsFromDB } from '../../constants/productsFromDB'
import { ProductsAdd } from './ProductsAdd/ProductsAdd'
import { ProductsAddAntd } from './ProductsAdd/ProductsAddAntd'
import { ProductList } from './ProductsList/ProductList'
import { URL } from '../../constants/config'


export const Products = () => {
  const [products, productsState] = useState([]);
  const [totalProducts, totalProductsUpdate] = useState(0)


  const addProduct = (nuevoProducto) => {
    const newArray = [...products, nuevoProducto]
    productsState(newArray)
    totalProducts(totalProducts + 1)
  }



  const deleteProduct = (id) => {
    const newArray = products.filter(prod => prod._id !== id)
    productsState(newArray)
  }

  useEffect(() => {
    // Ejecuta alguna lógica ya sea una vez o basado en el cambio de cierto elemento
    loadProducts()
  }, []);

  const loadProducts = async () => {
    const response = await axios.get(`${URL}/products`);
    const productsDB = response.data.products
    const total = response.data.total
    productsState(productsDB);
    totalProductsUpdate(total)


  }

  return (
    <div>
      <Typography.Title level={1}>Products</Typography.Title>
      <ProductsAddAntd addProduct={addProduct} />
      {/* <ProductsAdd /> */}
      <h1>PRODUCTOS ENCONTRADOS: {totalProducts}</h1>
      <ProductList productsDBToList={products} deleteProduct={deleteProduct} />
    </div>
  )
}
