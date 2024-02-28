/**
 * components/image-carousel/index.tsx
 * 
 * Author: Jordi Castro
 * Date: 02/28/24
 */

'use client';

import React from 'react';
import styles from './image-carousel.module.css';
import Image from 'next/image';
import kirby from '@/public/img/kirby.png';

interface CarouselProps {
    images: string[]
    style: string
    format: string


}

const Carousel: React.FC<CarouselProps> = ({images}) => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel}>
            {/* carousel description */}
            <div className={styles.carousel_description}>
                <h2 className={styles.article_title}>Article Title</h2>
                <h3 className={styles.author}>by Author</h3>
                <p className={styles.article_description}>Article description that will be cut off to save space...</p>
            </div>
            {/* temp image*/}
            <div className={styles.carousel_image}>
                <Image src={kirby} alt={'Temp Image'} width={500} height={100}></Image>
                {/* <Image src={kirby} alt={'Temporary Image'} width={500} height={100}></Image> */}
            </div>
            <div className={styles.carousel_pagination}>
                <span className={styles.pagination_circle}>&#x25CF;</span>
                <span className={styles.pagination_circle}>&#x25CF;</span>
                <span className={styles.pagination_circle}>&#x25CF;</span>
            </div>
            {/* left arrow*/}
            <div className={styles.left_arrow}>&#9664;</div>
            {/* right arrow*/}
            <div className={styles.right_arrow}>&#9654;</div>
            </div>
        </div>
    );
};

export default Carousel;