import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import styles from './postsPage.module.scss'
import Navigation from "../../navigation/Navigation";


const PostsPage =()=>{
    const dispatch =useDispatch()

   

    const posts = useSelector(store => store.posts.value)
    const products = useSelector(store =>store.counter.counter)
    //const index =  1
    console.log(products)
    //const comments = products[index].comments
  //  const likes = products[index].likes

    return(
        <>
       <div className={styles.post_page_container} >
           <div className={styles.post_img_container}>
        {posts.map(({url,userId},index) => <div className={styles.posts_container}><h2 className={styles.posts_title}>{userId}</h2><img  className={styles.posts_img} src ={products[index].url}/>{products[index].comments.map(el =><h3>{el}</h3>)}<span>Likes:{products[index].likes}</span></div>)
        
}</div>

 <Navigation/>
</div>
        </>
    )
}
export default PostsPage