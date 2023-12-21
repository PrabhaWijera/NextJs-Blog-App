import React from 'react';
import styles from './page.module.css';

const Layout = ({children}) => {
return(
    <div className={styles.container}>
        <h1 className={styles.mainTitle}>Our Works</h1>
        {children}
    </div>
)
}
export default Layout;