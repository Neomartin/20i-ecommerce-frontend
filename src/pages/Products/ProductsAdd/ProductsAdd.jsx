import { Button, Form, Input } from 'antd'
import React from 'react'

export const ProductsAdd = () => {
  return (
    <>
    <div className='w-75 p4'>
        <Form name='product-add' >
        <Form.Item label="ProductName" name="name"
                rules={[{required: true, message: 'El nombre del producto es obligatorio'}]}     > 
            <Input />
        </Form.Item> 
        <Form.Item>
            <Button type="primary" htmlType="submit">Cargar</Button>
        </Form.Item> 
        </Form>
    </div>
    </>
  )
}
