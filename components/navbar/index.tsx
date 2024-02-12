// components/footer/index.tsx
/**
 * components/footer/index.tsx
 *
 * Author: Sankalp Pandey
 * Date: 02/11/2024
 *
 */

import React from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
    const quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
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
                    <div className={styles.searchContainer}>
                        <img className={styles.searchLogo} src="/img/search-logo.png" alt="Search"/>
                        <input type="text" placeholder="Search.." className={styles.searchInput}/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
