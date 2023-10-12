"use client"

import React, { useState } from 'react';
import Slider from '../swipers/ImageSwiper';
import Tabs from '../tabs/tabs';
import Image from 'next/image';
import VisitButton from '../button-links/visitButton';
import imagesByCategory from '../../data/data';
import adventica from '../../links/links';

const SwitchSwiper = () => {
    const [currentCategory, setCurrentCategory] = useState('karting');

    const categories = Object.keys(imagesByCategory);

    return (
        <div className="family">
            <div className='family__container'>
                <div className="family__header">
                    <a href={adventica} target="_blank" className="family__logo">
                        <Image src="/images/family_logo.png" alt='' width={630} height={160} />
                    </a>
                    <div className="family__title block__title">Центр для всей семьи</div>
                    <Tabs categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} labels={imagesByCategory} />
                </div>
                <Slider info={imagesByCategory[currentCategory]} />
                <VisitButton link={adventica}/>
            </div>
        </div>
    );
};

export default SwitchSwiper;