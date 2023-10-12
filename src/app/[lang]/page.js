
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import SwitchSwiper from './components/blocks/FamilyCenter';

export default async function Home({ params }) {

    console.log(params, 'from page');

    return (
        <>
            <main className="main">
                <SwitchSwiper />
            </main>
        </>
    )
}
