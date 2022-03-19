import React from 'react'

export const Home = ({usuario, cosa, otroDato}) => {
  return (
    <>
        <h1>Bienvenido {usuario.fullName}</h1>
        <p>{cosa}</p>
    </>
  )
}
