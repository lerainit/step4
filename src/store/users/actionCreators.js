import { setUsers } from "./actions";



 export const setUsersAC = () =>  async (dispatch) =>{
    if(!localStorage.getItem('users')){
        try {
            const users = await fetch('users.json').then(response =>response.json());
         console.log(users)
    
        
         localStorage.setItem('users',JSON.stringify(users))
               
   
                dispatch({ type:setUsers})
            
         
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setUsers})
        }


 }