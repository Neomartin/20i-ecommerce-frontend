import React from 'react'

export const Home = ({usuario, other}) => {

  return (
    <>
        <h1>Bienvenido {usuario.fullName}</h1>
        <p>{other}</p>
    </>
  )
}
