import React  from 'react'
import styles from './productCard.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { openModalAC } from '../../store/modal/actionCreators';
import PropTypes from 'prop-types'
import { renderBackgroundAC, setBackgroundAC } from '../../store/cardBackground/actionCreators';
import { hideBackgroundAC } from '../../store/cardBackground/actionCreators';
import Background from './background';
import { setProductsAC } from '../../store/products/actionCreator';
import { setBackground } from '../../store/cardBackground/actions';
import {setUserIndexAC} from '../../store/userIndex/actionCreators'

 const Card =(props) => {
 
   const productsArr = useSelector(store => store.products.value)

const userIndex = props.userIndex

const products = productsArr[userIndex].posts
 const dispatch = useDispatch();

const id = props.id
const index = props.index


let storeBackground = props.background


return(
            <>
            <div data-id={id} onMouseEnter={() =>{ 
              dispatch(renderBackgroundAC({index:index,userIndex:userIndex}))
           
            dispatch(setProductsAC())
       }} onMouseLeave ={() =>{
       
         dispatch(hideBackgroundAC({index:index,userIndex:userIndex}))

       dispatch(setProductsAC())
  }}
       className={styles.img_container}>

           <img  className={styles.image} src={props.url} alt = 'Product '  data-id={id} />
           { storeBackground &&
         <Background   handleClick = {()=>{dispatch(openModalAC())
          dispatch(setUserIndexAC(userIndex))
            dispatch({type:'SET_VALUE_INDEX',payload:index})
        }
        }   comments ={products[index].comments}  index ={props.index} userIndex={userIndex}/>

           } 

             </div>
         
            </>
        )
    }
    Card.propTypes  = {
        name:PropTypes.string,
        price:PropTypes.number,
        url:PropTypes.string,
        art:PropTypes.number,
        id:PropTypes.number,
        fill:PropTypes.string
        
        }
        Card.defaultProps ={
        
            name:'Product name',
            price:0,
            url:'',
            art:0,
            id:-1,
            fill:'#fff'
        
        }
 export default Card; 