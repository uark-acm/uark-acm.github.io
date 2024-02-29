/**
 * components/image-carousel/index.tsx
 * 
 * Author: Jordi Castro
 * Date: 02/28/24
 */

'use client';

import React, { useState } from 'react';
import styles from './image-carousel.module.css';
import Image, { StaticImageData } from 'next/image';

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

// <div className='carousel' style=style format=format>

const Carousel: React.FC<CarouselProps> = ({images, style, format}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const onAcknowledgeClick = (arrow: string) => {
        console.log(`${arrow} arrow has been clicked!`)
    
        if (arrow === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            console.log(`currentIndex:${currentIndex}`)
        }
        if (arrow === 'right' && currentIndex < 5) {
            setCurrentIndex(currentIndex + 1)
            console.log(`currentIndex:${currentIndex}`)
        }
    }

    return (
            <div className={styles.carousel}>
            {/* carousel description */}
            <div className={styles.carouselDescription}>
                <h2 className={styles.articleTitle}>Article Title </h2>
                <h3 className={styles.author}>by Author</h3>
                <p className={styles.article_description}>Article description that will be cut off to save space...</p>
            </div>
            <div className={styles.carouselImage}>
                <Image src={images[currentIndex]} alt={'Temp Image'} width={500} height={100}></Image>
            </div>
            <div className={styles.carouselPagination}>
                <span className={styles.paginationCircle}>&#x25CF;</span>
                <span className={styles.paginationCircle}>&#x25CF;</span>
                <span className={styles.paginationCircle}>&#x25CF;</span>
            </div>
            {/* left arrow*/}
            <div className={styles.leftArrow} onClick={() => onAcknowledgeClick('left')}>&#9664;</div>
            {/* right arrow*/}
            <div className={styles.rightArrow} onClick={() => onAcknowledgeClick('right')}>&#9654;</div>
            </div>
    );
};

export default Carousel;