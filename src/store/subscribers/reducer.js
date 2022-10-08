import { addSubscriber } from "./actions";

const initialValue = {
    value:JSON.parse(localStorage.getItem('users')),
 
}
const subscriberReducer =(state =initialValue,action) =>{

    switch (action.type){


       
        case addSubscriber: {
                let users = state.value
             let subscribers = users[action.payload.index].subscribers


             subscribers.push(action.payload.subscriber)
             users[action.payload.index].subscribers = subscribers

             localStorage.setItem('users',JSON.stringify(users))

console.log(users)

            return {value:JSON.parse(localStorage.getItem('users'))}
            }
        default:{
            return state
        }
        
    }


}
export default subscriberReducer