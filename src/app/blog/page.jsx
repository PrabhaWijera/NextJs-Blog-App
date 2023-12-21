import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';


// data fetching next js 
async function getData() {
   const res = await fetch('http://localhost:3000/api/posts',{
      cache:"no-store"
   })
 

   if (!res.ok) {
      throw new Error(res.status);
   }

   return res.json()
   
}





const Blog = async () => {

   const data = await getData();
   return (
      <div className={style.maincontainer}>
         {data.map((item) => (
            <Link href={`/blog/${item._id}`} className={style.container}  key={item.id}>
               <div className={style.imageContainer}>
                  <Image className={style.image} src={item.img} alt="Picture of the author" width={150} height={150} />
               </div>
               <div className={style.content}>
                  <h1 className={style.title}>{item.title}</h1>
                  <p className={style.desc}>{item.desc}
                  </p>
               </div>
            </Link>
         ))}
      </div>
   )
}

export default Blog;