import React from 'react'
import ProductList from "../../components/ProductList"
import {Main,Title} from "./style"

const ListProducts = () => {
  return (
    <Main>
      <Title>Product management</Title>
      <ProductList/>
    </Main>
  )
}

export default ListProducts 