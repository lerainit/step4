import { renderBackground,hideBackground,setBackground } from "./actions";
const initialValue = {
    value:JSON.parse(localStorage.getItem('products')),
    isLoading:true
  
}


const BackgroundReducer =  (state =initialValue, action) =>{

  
        switch (action.type) {
            case setBackground:{
                return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
            }

            case renderBackground: {
              
                let products = state.value
                 console.log(products) 
                 products[action.payload.index].hasBackground = true

              localStorage.setItem('products',JSON.stringify(products))
   
               
                   return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
            }
      
            case hideBackground: {
                let products= state.value
              products[action.payload.index].hasBackground = false
                localStorage.setItem('products',JSON.stringify(products))
  
                     return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
              }
          default:{
              return state
          }
        }
      };
      export default BackgroundReducer