import { setUsers } from "./actions";
const initialValue = {
value:JSON.parse(localStorage.getItem('users'))
}

const UsersReducer = (state = initialValue,action) =>{
switch (action.type){


case setUsers: {
return {value:JSON.parse(localStorage.getItem('users'))}
}
default:{
    return state
}


}

}
export default UsersReducer;