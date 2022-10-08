import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductPage from './pages/productpage/productPage';
import NotFoundPage from './pages/notfoundpage/notfoundpage';
import PostsPage from './componentns/card/posts/postsPage';


const AppRoutes = () => {
const id1 =1
const id2 = 2

    return (
     
        <Routes>
            <Route path='/' element={<PostsPage />   } />
           <Route path='/user2' element={<ProductPage id ={id1}/>} />
           <Route path='/posts' element={<ProductPage  />} />
           <Route path='/user1' element={<ProductPage id ={id2}/>}/>
           <Route path='*' element={<NotFoundPage />} />
         </Routes>

        
    )
}
export default AppRoutes;
