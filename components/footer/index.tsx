/**
 * components/footer/index.tsx
 * 
 * Author: Aidan McQueen, Jamari Beneloga, Josh Johnson
 * Date: 02/08/2024
 */

import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <div className={styles.socialIcons}>
                    <a href="" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="" aria-label="Discord">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a href="" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} ACM UARK RSO</p>
            </div>
            <div className={styles.center}>
                <p>The content of this site is solely that of ACM, a registered student organization at the University of Arkansas, and does not in any way reflect the views of the University of Arkansas.</p>
            </div>
            <div className={styles.right}>
                <a href="">Back To Top</a>
                <a href="">About</a>
                <a href="">Contact Us</a>
            </div>
            <div className={styles.center}>
            </div>
        </footer>
    );
};

export default Footer;