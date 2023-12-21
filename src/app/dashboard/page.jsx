"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from "swr";
import { useSession } from "next-auth/react";
 

const Dashboard = () => {
    // const [data, setData] = useState([]);
    // const [error, setErr] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);


    // useEffect(() => {

    //     const getData = async () => {
    //         setIsLoading(true);
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //             cache: "no-store"
    //         })


    //         if (!res.ok) {
    //             setErr(true);
    //         }


    //         const data = await res.json();

    //         setData(data);
    //         setIsLoading(false);
    //     };
    //     getData();
    // }, []);



const session=useSession();

 
    // dont use effect to use swr

const fetcher=(...args)=>fetch(...args).then(res=>res.json());


const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts/${id}",fetcher);
console.log(data,error,isLoading);

    return (
        <div className={styles.container}>
            <h1>DashBoard page</h1>
        </div>
    )
}

export default Dashboard;