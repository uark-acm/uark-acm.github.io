// components/footer/index.tsx

import React from 'react';
import styles from './navbar.module.css';
import NextLink from 'next/link';

const Navbar: React.FC = () => {
    const quote = "Yap yap yap yap";
    const quoteAuthor = "ACM Web Dev Team"

    return (
        <nav className={styles.navbar}>
            <img className={styles.acmLogo} src="/img/acm-logo.png" alt="Association for Computing Machinery Logo"/>
            <div className={styles.navbarContentContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.left}>
                        <div className={styles.acmTextContainer}>
                            <h1 className={styles.acmText}>Association for Computing Machinery</h1>
                            <div className={styles.studentChapter}>
                                <img className={styles.uaLogo} src="/img/ua-logo.png"
                                     alt="University of Arkansas Logo"/>
                                <p className={styles.studentChapterText}>Student Chapter</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <p className={styles.quote}>"{quote}"</p>
                    <p className={styles.quoteAuthor}>- {quoteAuthor}</p>
                </div>
                <div className={styles.right}>
                    <input type="text" placeholder="Search..." className={styles.searchInput}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
