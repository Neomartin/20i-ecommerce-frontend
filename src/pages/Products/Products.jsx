import { Modal, Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductsFromDB } from '../../constants/productsFromDB'
import { ProductsAdd } from './ProductsAdd/ProductsAdd'
import { ProductsAddAntd } from './ProductsAdd/ProductsAddAntd'
import { ProductList } from './ProductsList/ProductList'
import { URL } from '../../constants/config'


export const Products = () => {
  const [products, productsState] = useState([]);
  const [totalProducts, totalProductsUpdate] = useState(0);
  const [actionDialog, toggleActionDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');

  const addProduct = (nuevoProducto) => {
    const newArray = [...products, nuevoProducto]
    productsState(newArray)
    totalProducts(totalProducts + 1)
  }

  const deleteProduct = async (id) => {
    try {

      console.log(id)
      const deleted = await axios.delete(`${URL}/product`, { params: {
        query_id: id
      }});
      const newArray = products.filter(prod => prod._id !== id)
      productsState(newArray)
      setDialogMessage(deleted.data.msg);
      setDialogTitle(`PRODUCTO ${id} ELIMINADO`)
      toggleActionDialog(true)
    } catch (error) {
      setDialogMessage('Error al borra el pructo');
      setDialogTitle(`ERROR`)
      toggleActionDialog(true)
    }
  }



  useEffect(() => {
    // Ejecuta alguna lógica ya sea una vez o basado en el cambio de cierto elemento
    loadProducts()
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get(`${URL}/products`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('userToken'))
        }
      });
      const productsDB = response.data.products
      const total = response.data.total
      productsState(productsDB);
      totalProductsUpdate(total);
      setDialogMessage(`Se obtuvieron un total de ${total} productos`);
      setDialogTitle('PRODUCTOS OBTENIDOS')
      toggleActionDialog(true)
    } catch (error) {
      console.log(error.response.data.msg)
    }
    
  }

  const hiddeModal = () => toggleActionDialog(false)

  return (
    <>
      <div>
        <Typography.Title level={1}>Products</Typography.Title>
        <ProductsAddAntd addProduct={addProduct} />
        {/* <ProductsAdd /> */}
        <h1>PRODUCTOS ENCONTRADOS: {totalProducts}</h1>
        <ProductList productsDBToList={products} deleteProduct={deleteProduct} />
      </div>
      <Modal title={dialogTitle} visible={actionDialog} onOk={hiddeModal} onCancel={hiddeModal}>
        {dialogMessage}
      </Modal>
    </>

  )
}
