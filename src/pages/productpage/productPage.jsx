import React from 'react'
import Card from '../../componentns/card/productCard'
import { useSelector,useDispatch } from 'react-redux'
import { shallowEqual } from 'react-redux'
import UserHeader from '../../componentns/userheader/userheader'



const ProductPage = ({id}) => {

     const products = useSelector(store => store.products.value, shallowEqual)

     
const dispatch = useDispatch()
      
     return (
          <>
          <UserHeader id ={id} />
               {products.map(({ id, name, price, art, url,hasBackground}, index) => <Card key={index} id={id} name={name} price={price} art={art} url={url} background = {hasBackground ? true : false}  index={index} products={products} ></Card>)}

          </>
     )

}
export default ProductPage
