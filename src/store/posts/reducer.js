import { setPosts } from "./actions";

const initialValue = {
    value:[],
}


const postsReducer = (state = initialValue,action) =>{

switch (action.type){


case setPosts: {
return {value:JSON.parse(localStorage.getItem('posts'))}
}
default:{
    return state
}


}


}

export default postsReducer