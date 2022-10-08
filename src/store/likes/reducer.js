import { incrementLikes,decrementLikes,setCounter } from "./actions";

const initialValue ={
    counter:JSON.parse(localStorage.getItem('products')),
    isLoading:true
}

const likesReducer = (state = initialValue,action) =>{

    switch (action.type) {
        case setCounter:{
  
            return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
        case incrementLikes: {
            let productsArr =state.counter
            console.log(productsArr)
            let products = productsArr[action.payload.userIndex].posts
 let likes = products[action.payload.index].likes


products[action.payload.index].likes = likes + 1

 
 
 let counter =  products[action.payload.index].likes 


localStorage.setItem('counter',JSON.stringify(productsArr))

          return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
  
      
  
        case decrementLikes: {
            let productsArr =state.counter
            let products = productsArr[action.payload.userIndex].posts
 let likes = products[action.payload.index].likes


products[action.payload.index].likes = likes - 1

 
 
 let counter =  products[action.payload.index].likes 


localStorage.setItem('counter',JSON.stringify(productsArr))

          return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
       default: {
          return state
        }


    }



}
export default likesReducer