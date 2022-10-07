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
 let likes = action.payload.products[action.payload.index].likes


 action.payload.products[action.payload.index].likes = likes + 1

 
 
 let counter =  action.payload.products[action.payload.index].likes 


localStorage.setItem('counter',JSON.stringify(action.payload.products))

          return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
  
      
  
        case decrementLikes: {
            let likes = action.payload.products[action.payload.index].likes

            action.payload.products[action.payload.index].likes = likes - 1
            
            let counter =  action.payload.products[action.payload.index].likes 
            console.log(counter)

localStorage.setItem('counter',JSON.stringify(counter))

          return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
       default: {
          return state
        }


    }



}
export default likesReducer