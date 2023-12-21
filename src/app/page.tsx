import Image from 'next/image';
import styles from './page.module.css'; 
import Button from './components/Button/Button';
import hero from '/public/hero.png';


export default function Home(){
  return(
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital Products.</h1>
        <p className={styles.desc}>Turning your Idea into Reallity. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      
      <div className={styles.imgContainer}>
      <Image src={hero} className={styles.img} alt="nextjs" />
      </div>
       
    </div>
  )

}