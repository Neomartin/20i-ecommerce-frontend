import { Divider } from 'antd';
import React from 'react'
import { ProductListItem } from './ProductListItem/ProductListItem';

export const ProductList = ({ productsDBToList, deleteProduct }) => {

  return (
    <>
      <Divider orientation="left">Lista de Productos</Divider>

      <ul>
        {productsDBToList.map((product, index) => 
            <ProductListItem product={product} key={product._id} deleteProduct={deleteProduct}/>
        )}
      </ul>

    </>

  )
}
