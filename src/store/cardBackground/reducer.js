import { renderBackground,hideBackground, } from "./actions";
const initialValue = {
    value:JSON.parse(localStorage.getItem('products'))
}


const BackgroundReducer =  (state =initialValue, action) =>{

  
        switch (action.type) {
            case renderBackground: {
               
                let products = state.value
                 console.log(products) 
              products[action.payload.index].hasBackground = true

              localStorage.setItem('products',JSON.stringify(products))
   
                  
                   return{ value:JSON.parse(localStorage.getItem('products'))}
            }
      
            case hideBackground: {
                let products = state.value
                products[action.payload.index].hasBackground = false
                localStorage.setItem('products',JSON.stringify(products))
  
                     return{ value:JSON.parse(localStorage.getItem('products'))}
              }
          default:{
              return state
          }
        }
      };
      export default BackgroundReducer