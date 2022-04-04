import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import axios from 'axios';
import React, { useEffect } from 'react'
const { Option } = Select;

const URL = 'http://localhost:3100/api'

export const ProductsAddAntd = ({addProduct}) => {
    const addNewProduct = async (formData) => {
        try {
            const { data } = await axios.post(`${URL}/product`, formData );
            console.log('dataOne', data.productoNuevo)
            addProduct(data.productoNuevo)
        } catch (error) {
            alert('Error al cargar producto')
        }
        
    }
    return (
        <Row>
            <Col xs={18} lg={12}>
                <Form
                    layout='vertical'
                    name="product"
                    onFinish={addNewProduct}
                    initialValues={{ stock: true, price: 0 }}
                // validateMessages={validateMessages}
                >
                    <Row gutter={16}>
                        <Col xs={24} lg={24}>
                            <Form.Item name={'name'} label='Nombre producto' rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={24}>
                            <Form.Item name={'description'} label='Descripción  producto' rules={[{}]}>
                                <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Form.Item  name={'price'} label="Price" rules={[{ type: 'number', min: 0, max: 9999999, required: true }]}>
                                <InputNumber className="mb-0" addonBefore="$"/>
                            </Form.Item>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Form.Item name={'category_id'} label='Categoría' rules={[{ required: true }]}>
                                <Select>
                                    <Option value="PERFUMERÍA">PERFUMERÍA</Option>
                                    <Option value="GENERAL">GENERAL</Option>
                                    <Option value="LIMPIEZA">LIMPIEZA</Option>
                                    <Option value="CARNES">CARNES</Option>
                                    <Option value="LACTEOS">LACTEOS</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item name={'stock'} valuePropName="checked">
                                <Checkbox >Stock</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Añadir
                                </Button>
                            </Form.Item>
                        </Col>

                    </Row>




                </Form>
            </Col>
        </Row>

    )
}
