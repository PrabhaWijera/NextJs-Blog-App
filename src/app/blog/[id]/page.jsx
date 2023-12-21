import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import {notFound} from "next/navigation";



async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
       cache:"no-store"
    })
  
 
    if (!res.ok) {
      
      return notFound();
    }
 
    return res.json()
 }

 
export async function generateMetadata({params}){
    const post= await getData(params.id);
    return{
        title:post.title,
        description:post.desc
    };
}




const Post=  async ({params})=>{

    const data=await getData(params.id);

    return(
    <div className={style.container}>
         <div className={style.top}>
            <div className={style.info}>
                <h1 className={style.title}>{data.title}</h1>
            <p className={style.desc}>
             {data.desc}
            </p>
            <div className={style.author}>
                <Image className={style.avatar} src={data.img} width={40} height={40} alt="profile" />
            <span className={style.username}>{data.username}</span>
            </div>
            </div>
            <div className={style.imageContainer}>
                <Image className={style.image} src={data.img}  width={600} height={400} alt="profile" />
            </div>
         </div>
         <div className={style.content}>
            <p className={style.text}>
             {data.content}
            </p>
         </div>
    </div>
)
}

export default Post;    