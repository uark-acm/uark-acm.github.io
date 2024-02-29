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
import ContactCard from '@/components/contact-card';
import profilePicture from '@/public/img/default-profile-picture-2.jpg';
import Carousel from '@/components/image-carousel';
import kirby from '@/public/img/kirby.png';

const Home: NextPage = () => {
    
    return (
        <div className={'flex items-center flex-col m-5'}>
            <h1 className={'text-4xl mb-[100px]'}>The UARK ACM website is under development :)!</h1>
            <div className ={'navbar'}>
                <Navbar/>
            </div>
            <div className={'carousel'}>
                <Carousel images={
                        [kirby, acmLogo]
                    } 
                    style={ {
                            width:10, height:10, backgroundColor:'#cccccc', 
                            textColor:'#ffffff', 
                            imageWidth:10, 
                            imageHeight:10,
                        } 
                    } 
                    format={ {
                            orientation:{verticalStart:0, verticalEnd:10, horizontalStart:0, horizontalEnd:10}, 
                            startingImage:'startingImage', 
                            speed:-1,
                        } 
                    }/>
        
            </div>
            
            <Image src={acmLogo} alt={'ACM Logo'} width={500} height={500} />
            <ContactCard profilePicture={profilePicture} name={'Alex Prosser'} role={'President'} email={'alprosse@uark.edu'}/>
            <Footer />
        </div>
    );
}

export default Home;