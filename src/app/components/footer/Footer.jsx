
import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
const  Footer=()=>{
return(
    <div className={style.container}>
        <div>©️ 2023 PrabhashWijerathna. All rights reserved.</div>
  {/* //loader/ cod splliting / lazy loading suspense work */}
   <div className={style.social}>
    <Image src="/1.png" className={style.icon} alt="facebook" width={15} height={15}/>
    <Image src="/2.png" className={style.icon}alt="instagram" width={15} height={15}/>
    <Image src="/3.png" className={style.icon} alt="twitter X" width={15} height={15}/>
    <Image src="/4.png" className={style.icon} alt="yt" width={15} height={15}/>
   </div>
    </div>
)
}

export default Footer;