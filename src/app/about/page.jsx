import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '../components/Button/Button';

const About=()=>{
return(
    <div className={styles.container}>
       <div className={styles.imgContainer}>
        <Image src="https://images.unsplash.com/photo-1701971655053-0ba46b0b487d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" 
        alt="nextjs"  
        fill={true} 
        className={styles.img}
        />
        <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>Handcrafting award winninng digital expereience</h2>
        </div>
       </div>
       <div className={styles.textContainer}>
        <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea perferendis natus optio commodi eius quaerat
                 rerum alias veritatis ullam! Omnis, ipsam. Deserunt cupiditate animi ex veniam, perspiciatis ad ipsa ducimus?
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea perferendis natus optio commodi eius quaerat
                 rerum alias veritatis ullam! Omnis, ipsam. Deserunt cupiditate animi ex veniam, perspiciatis ad ipsa ducimus?
                 Lorem ipsum, dolor sit< br/> amet consectetur adipisicing elit. Ea perferendis natus optio commodi eius quaerat
                 rerum alias veritatis ullam! Omnis, ipsam. Deserunt cupiditate animi ex veniam, perspiciatis ad ipsa ducimus?
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Whate We Do?</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Alias, magni? Impedit tempore,
             at porro sequi maiores odit eum ullam,
              ex possimus libero in fuga enim laborum! Unde, impedit. Tenetur, non.
              <br />
              <br />
              Alias, magni
        </p>
        <Button url="/contact" text="Contact"/>
        </div>
       </div>
    </div>
)
}

export default About;