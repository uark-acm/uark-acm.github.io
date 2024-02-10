/**
 * components/footer/index.tsx
 * 
 * Author: Alex Prosser, Jordi Castro
 * Date: 02/08/2024
 */

import { NextPage } from 'next';
import Image from 'next/image';
import Footer from '@/components/footer';
import acmLogo from '@/public/img/acm-logo.png';
import kirby from '@/public/img/kirby.png';

const Home: NextPage = () => {

    // left and right arrow components: onClick={() => onAcknowledgeClick('Left')}
    // const onAcknowledgeClick = (arrow : string) => {
    //     console.log('${arrow} arrow has been clicked');
    // };
    
    return (
        <div className={'flex items-center flex-col m-5'}>
            <h1 className={'text-4xl mb-[100px]'}>The UARK ACM website is under development :)!</h1>
            <div className={'carousel'}>
                {/* carousel description */}
                <div className={'carousel-description'}>
                    <h2 className={'article-title'}>Article Title</h2>
                    <h3 className={'author'}>by Author</h3>
                    <p className={'article-description'}>Article description that will be cut off to save space...</p>
                </div>
                {/* temp image*/}
                <div className={'carousel-image'}>
                    <Image src={kirby} alt={'Temporary Image'} width={500} height={100} ></Image>
                </div>
                <div className={'carousel-pagination'}>
                    <span className={'pagination-circle'}>&#x25CF;</span>
                    <span className={'pagination-circle'}>&#x25CF;</span>
                    <span className={'pagination-circle'}>&#x25CF;</span>
                </div>
                {/* left arrow*/}
                <div className={'arrow left-arrow'}>&#9664;</div>
                {/* right arrow*/}
                <div className={'arrow right-arrow'}>&#9654;</div>
            </div>
            <Image src={acmLogo} alt={'ACM Logo'} width={500} height={500} />
            <Footer />
        </div>
    );
}

export default Home;