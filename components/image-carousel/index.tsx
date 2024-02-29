/**
 * components/image-carousel/index.tsx
 * 
 * Author: Jordi Castro
 * Date: 02/28/24
 */

'use client';

import React from 'react';
import styles from './image-carousel.module.css';
import Image, { StaticImageData } from 'next/image';
import kirby from '@/public/img/kirby.png';
import acmLogo from '@/public/img/acm-logo.png';

interface CarouselProps {
    images: StaticImageData[]
    style: {
        width: number,
        height: number,
        backgroundColor: string,
        textColor: string,
        imageWidth: number,
        imageHeight: number,
    }
    format: {
        orientation: {
            verticalStart: number,
            verticalEnd: number,
            horizontalStart: number,
            horizontalEnd: number,   
        },
        startingImage: string,
        speed: number,
    }


}

const Carousel: React.FC<CarouselProps> = ({images, style, format}) => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel}>
            {/* carousel description */}
            <div className={styles.carouselDescription}>
                <h2 className={styles.articleTitle}>Article Title </h2>
                <h3 className={styles.author}>by Author</h3>
                <p className={styles.article_description}>Article description that will be cut off to save space...</p>
            </div>
            {/* temp image*/}
            <div className={styles.carouselImage}>
                <Image src={images[0]} alt={'Temp Image'} width={500} height={100}></Image>
            </div>
            <div className={styles.carouselPagination}>
                <span className={styles.paginationCircle}>&#x25CF;</span>
                <span className={styles.paginationCircle}>&#x25CF;</span>
                <span className={styles.paginationCircle}>&#x25CF;</span>
            </div>
            {/* left arrow*/}
            <div className={styles.leftArrow}>&#9664;</div>
            {/* right arrow*/}
            <div className={styles.rightArrow}>&#9654;</div>
            </div>
        </div>
    );
};

export default Carousel;