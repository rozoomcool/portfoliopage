"use client"

import { useState } from "react";
import styles from "./Header.module.scss"

export default function Header() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={`${styles.logo} ${styles.animatedBorder}`}>
                        Rosul<span className={styles.coloredDot}>.</span>
                    </div>
                    <div>
                        <ul className={styles.navList}>
                            <li className={`${styles.navListItem} ${styles.activeNavListItem}`}>Home</li>
                            <li className={styles.navListItem}>Projects</li>
                            <li className={styles.navListItem}>Resume</li>
                            <li className={styles.navListItem}>Contacts</li>
                            <li className={styles.navListItem}>About</li>
                        </ul>
                    </div>
                    <button className={styles.menuButton} onClick={toggleDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
                            <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </nav>

                <div className={isDrawerOpen ? styles.drawerOpened : styles.drawerClosed}>
                    <div className={styles.drawerMenu}>
                        <div></div>
                        <button className={styles.menuButton} onClick={toggleDrawer}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        </button></div>
                    <ul className={styles.drawerList}>
                        <li className={`${styles.drawerListItem} ${styles.activeDrawerListItem}`}>Home</li>
                        <li className={styles.drawerListItem}>Projects</li>
                        <li className={styles.drawerListItem}>Contacts</li>
                        <li className={styles.drawerListItem}>About</li>
                    </ul>
                </div>

            </header>
        </>
    );
}