import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './productCard.module.scss'
import Modal from '../modal/modal'
import { setProductsAC } from "../../store/products/actionCreator";


const Background =({handleClick,comments,index}) =>{
    const products= useSelector(store => store.counter.counter)
   // const   = JSON.parse(localStorage.getItem('counter'))
 const dispatch =useDispatch()

    let counter =products[index].likes
  

return(
<>
  <div  className={styles.background} onClick={handleClick}>

<h2><span>Likes:</span>{counter}</h2>

<h2><span>Comments:</span>{comments.length}</h2>



  </div>
 
  </>  
    )
}

export default Background