import type { Metadata } from 'next';
import { Roboto } from 'next/font/google'
import './globals.css';

export const metadata: Metadata = {
    title: 'UARK ACM - Home',
    description: 'UARK ACM Home Page',
};

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <>
        <html lang='en' className={roboto.className}>
            <body>{children}</body>
        </html>
    </>
}

export default RootLayout;
