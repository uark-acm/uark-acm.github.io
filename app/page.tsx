import { NextPage } from 'next';
import Image from 'next/image';
import acmLogo from '@/public/img/acm-logo.png';

const Home: NextPage = () => {
    return <>
        <div className={'flex items-center flex-col m-5'}>
            <h1 className={'text-4xl mb-[100px]'}>The UARK ACM website is under development :)!</h1>
            <Image src={acmLogo} alt='ACM Logo' width={500} height={500} />
        </div>
    </>
}

export default Home;