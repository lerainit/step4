import {  setProducts } from './actions'


export const setProductsAC = () => async (dispatch) => {

if(!localStorage.getItem('products')){
    try {
        const products = await fetch('productsJSON.json').then(response =>response.json());
     console.log(products)

  const products2 = products[1]
    
        localStorage.setItem(`products`,JSON.stringify(products2.posts))
           
         
            dispatch({ type:setProducts})
        
     

    } catch (err) {
     
        console.log(err);
    }}
    else{
        dispatch({type:setProducts})
    }

} 
