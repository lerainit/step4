
import React from 'react'
import styles from './modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAC } from '../../store/modal/actionCreators'
import { incrementLikesAC } from '../../store/likes/actionCreators'




const Modal = () => {

  const dispatch = useDispatch()


  const index = useSelector(store => store.cardIndex.value)

  const products = useSelector(store => store.counter.counter)
  const users= useSelector(store => store.users.value)

  const user = users[1]
 

  const  products2 = JSON.parse(localStorage.getItem('counter'))
 
     let counter =products2[index].likes
   
  return (


    <div className={styles.modal}>
      <div className={styles.outer_container} onClick={() => { dispatch(closeModalAC()) }}></div>
      <div className={styles.modal_main_container} >  

      <div className={styles.user_name_container}>
        <img className={styles.user_img}   src={user.url}/>
        <h3>{user.name}</h3>
      </div>
<img className={styles.modal_img} src={products[index].url} />
<div className={styles.comments}>
  {products[index].comments.map(el => <h3 className={styles.comment}>{el}</h3>)}
  <h3><span>Likes</span>{counter}</h3>
  <button className={styles.modal_btn} onClick ={() =>{dispatch(incrementLikesAC({products:products,index:index}))}}>Like</button>
</div>


     
 <button className={styles.close_btn} onClick={() => { dispatch(closeModalAC()) }}>X</button>
       
      </div>
    </div>



  )

}


export default Modal 