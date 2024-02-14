/**
 * app/page.tsx
 * 
 * Author: Alex Prosser, Jordi Castro, Amadeo Costaldi
 * Date: 02/14/2024
 */

'use client';

import { NextPage } from 'next';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Footer from '@/components/footer';
import acmLogo from '@/public/img/acm-logo.png';
import kirby from '@/public/img/kirby.png';
import ContactCard from '@/components/contact-card';
import profilePicture from '@/public/img/default-profile-picture-2.jpg';

const Home: NextPage = () => {

    // left and right arrow components: onClick={() => onAcknowledgeClick('Left')}
    // const onAcknowledgeClick = (arrow : string) => {
    //     console.log('${arrow} arrow has been clicked');
    // };
    
    return (
        <div className={'flex items-center flex-col m-5'}>
            <h1 className={'text-4xl mb-[100px]'}>The UARK ACM website is under development :)!</h1>
            <div className ={'navbar'}>
                <Navbar/>
            </div>
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
            <ContactCard profilePicture={profilePicture} name={'Alex Prosser'} role={'President'} email={'alprosse@uark.edu'}/>
            <Footer />
        </div>
    );
}

export default Home;