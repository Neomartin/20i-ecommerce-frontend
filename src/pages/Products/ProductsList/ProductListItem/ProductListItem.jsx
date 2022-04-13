import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import axios from 'axios';
import React from 'react'
import { useAuth } from '../../../../auth/useAuth';
import './ProductListItem.scss';
import { URL } from '../../../../constants/config';

export const ProductListItem = ({product, deleteProduct}) => {
  const  handleDeleteItem = (id)=> {
    deleteProduct(id)
  }

  const handleActiveUser = async({_id, active}) => {
    console.log(active)
    active = !active
    const updatedUser = await axios.put(`${URL}/product/${_id}`, { active });
    console.log('updatedUser', updatedUser.data)
  }
  return (
    <li className='custom-li'>
        <div className='description'>
            <div className="title">{product.name}</div>
            <div className="category">
                {product.category_id}
            </div>
        </div>
        <div className="stock">
            {product.stock ?
                <>
                    <span>{product.quantity}</span>
                </>
                :
                <>
                    <span className="text-alert">SIN STOCK</span>
                </>
            }
        </div>
        <div className="price">
            ${product.price}
            <span className="iva">{product.iva}%</span>
        </div>
        <div className="actions">
            <Space size="small">
                <Button className='fit-button' type="primary" danger onClick={() => handleDeleteItem(product._id)}>
                    <DeleteOutlined />
                </Button>
                <Button className='fit-button' type="primary" onClick={() => handleActiveUser(product)}>
                    <CheckOutlined />
                </Button>
            </Space>
        </div>
    </li>
  )
}
