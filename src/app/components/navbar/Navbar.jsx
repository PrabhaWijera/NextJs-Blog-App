"use client"
import React, { use } from   "react";    
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
// all links to pages

const links=[

    {
        id:1,
        title:"Home",
        url:'/'
    },

    {
        id:2,
        title:'Portfolio',
        url:'/portfolio'
    },

    {
        id:3,
        title:'Blog',
        url:'/blog'
    },

    {
        id:4,
        title:'About',
        url:'/about'
    },

    {
        id:5,
        title:'Contact',
        url:'/contacts'  
    },

    {
        id:6,
        title:'Dashboard',
        url:'/dashboard'
    },





];


const Navbar=()=>{

const session= useSession();


return(
    <div className={styles.container}>
        <Link className={styles.logo}
        href="/">LOGONAME</Link>
        
        <div className={styles.linkConatiner}>
        <DarkModeToggle/>
           {links.map(link=>(
            <Link key={link.id} href={link.url}>

            {link.title}
            
            </Link>
           ))}
{session.status === "authenticated" && (
 <button className={styles.logout} 
 onClick={()=>{
 console.log(signOut);
}} >
 Sign In
 </button>
)}
          
        </div>

    </div>
)
}

export default Navbar;
