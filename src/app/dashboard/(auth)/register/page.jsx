"user client";
// import React, { useState } from 'react';
import style from './page.module.css';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';


const Register =()=>{


// const [errr,setError]=useState(false);

// const router=useRouter();

// const handleSubmit= async(e)=>{
// e.preventDefault();
// const name=e.target[0].value;
// const email=e.target[1].value;
// const password=e.target[2].value;

// try{
// const res =await fetch("/api/auth/register",{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name,
//         email,
//         password
//     })

// });
// res.status===200 && router.push('/dashboard/login?success= Accont has been createed successfully');
// }catch(error){
// setError(true);
// }



// }




return(
    <div className={style.container}>
        <form className={style.form} >
            <input type="text"  placeholder='username' className={style.input} required/>
            <input type="email"  placeholder='email' className={style.input} required/>
            <input type="password"  placeholder='password' className={style.input} required/>
            <button className={style.button}>Register</button>
        </form>
        {/* {errr && "somthing went wrong"} */}
        <Link href='/dashboard/login'>Login with Exiting Account..</Link>
    </div>
)
}

export default Register;