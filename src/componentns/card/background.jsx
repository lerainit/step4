import React from "react";
import {  useSelector } from "react-redux";
import styles from './productCard.module.scss'



const Background =({handleClick,comments,index,userIndex}) =>{
    const productsArr= useSelector(store => store.counter.counter)

  const products = productsArr[userIndex].posts

   
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