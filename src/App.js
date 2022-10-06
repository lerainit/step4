
import './App.scss';
import React, { useEffect} from 'react'
import Modal from './componentns/modal/modal'
import Navigation from './componentns/navigation/Navigation';
import AppRoutes from './AppRoutes';

import {useSelector} from 'react-redux'
import{useDispatch} from 'react-redux'
import { setProductsAC } from './store/products/actionCreator';
import {setCounterAC} from './store/likes/actionCreators'
import { setPostsAC } from './store/posts/actionCreators';
import { setUsersAC } from './store/users/actionCreators';
import UserHeader from './componentns/userheader/userheader';



const App = () => {
  const dispatch = useDispatch()
  const modal = useSelector(store =>store.modal.value)
  const deleteModal = useSelector(store => store.modal.deleteModalvalue)
 
 
  
  
  
  
  useEffect(() => {


dispatch(setProductsAC())
dispatch(setCounterAC())
dispatch(setPostsAC())

dispatch(setUsersAC())


  }, [])



return (
    <>
   <div className='App'>


        <AppRoutes  />

      </div>
 { modal &&
        <Modal ></Modal >}
    
    </>
  );
}


export default App

