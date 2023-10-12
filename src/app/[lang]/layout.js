import './scss/globals.scss'
// import { Inter } from 'next/font/google'
import Image from 'next/image';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Port Mall',
    description: 'Mall',
}

export default function RootLayout({ children, params }) {

    return (
        <html lang={params.lang}>
            <head>
                <link rel="icon" href="/images/icon.png" />
            </head>
            <body>
                <div className='wrapper'>
                    {children}
                </div>
            </body>
        </html>
    )
}
