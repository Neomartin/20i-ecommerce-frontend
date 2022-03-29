import { Col, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../shared/shared.scss';
const URL = 'http://localhost:3000/api'
export function ProductsAdd() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const first = await fetch(`${URL}/product`, { 
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    // const dataOne = await axios.post(`${URL}/product`, { data })
    const newProductFromDB = await first.json();
    console.log('newProductFromDB', newProductFromDB)
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col lg={12}>
          <Row gutter={16}>
            <Col lg={24}>
              <input type="text" placeholder="Nombre Producto" {...register("name", { required: true, maxLength: 81 })} />
              {errors.name && <span className='text-alert'>Este campo es requerido</span>}
            </Col>
            <Col lg={24}>
              <textarea {...register("description", { required: true })} />
            </Col>
            <Col lg={12}>
              <input type="number" placeholder="Precio" {...register("price", { required: true, max: 100000, min: 0, valueAsNumber: true })} />
            </Col>
            <Col lg={12}>
              <select {...register("category_id", { required: true })}>
                <option value="PERFUMERÍA">PERFUMERÍA</option>
                <option value="GENERAL"> GENERAL</option>
                <option value="LIMPIEZA"> LIMPIEZA</option>
                <option value="CARNES"> ALIMENTOS</option>
              </select>
            </Col>
            <Col lg={24}>
            SIN STOCK<input type="checkbox" placeholder="Stock" {...register("stock")} />
            {errors.stock && <span className='text-alert'>Es obligatorio</span>}
            </Col>
            <Col lg={24}>
              <input type="submit" />
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
}