import React from "react";
import { useSelector } from "react-redux";
import styles  from './userHeader.module.scss'
import { NavLink } from "react-router-dom";

const UserHeader = (props) =>{
    const users= useSelector(store => store.users.value)

    console.log(users)
    console.log(props.id)
const index = users.findIndex(el => el.id === props.id)
console.log(index)
    const user = users[index]

return(

<>

<header className={styles.user_header}>
<NavLink className={styles.logo_insta} to='/' ><h2 className={styles.logo_insta}>Instagram</h2 ></NavLink>
<img  className={styles.user_img}   src={user.url} alt ='Avatar'  />
<div className={styles.content_container}>
<h2 className={styles.user_nickname}>{user.nickName}</h2>

<h3 className={styles.user_posts}>{user.posts.length}<span className={styles.user_span}>posts</span></h3>
<h3 className={styles.user_subscribers}>{user.subscribers}<span>followers</span></h3>

<h2 className={styles.user_name}>{user.name}</h2>

<h3>{user.info}</h3>
</div>
</header>

</>

)


}
export default UserHeader
