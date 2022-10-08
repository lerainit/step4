import { incrementLikes,decrementLikes,setCounter } from "./actions";

export  const incrementLikesAC =(payload)=>({type:incrementLikes,payload})

export const decrementLikesAC =() =>({type:decrementLikes})
export const setCounterAC = () => async (dispatch) => {

    if(!localStorage.getItem('counter')){
        try {
            const counter = await fetch('productsJSON.json').then(response =>response.json());

         
         
                localStorage.setItem('counter',JSON.stringify(counter))
               
               
                dispatch({ type:setCounter})
            
         
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setCounter})
        }
    
    } 