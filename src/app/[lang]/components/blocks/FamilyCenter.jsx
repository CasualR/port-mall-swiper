"use client"

import React, { useState } from 'react';
import Slider from '../swipers/ImageSwiper';
import Tabs from '../tabs/tabs';
import Image from 'next/image';
import VisitButton from '../button-links/visitButton';
import imagesByCategory from '../../data/data';
import adventica from '../../links/links';

import styles from "../../scss/blocks/family.module.scss";
import title from "../../scss/titles/blockTitle.module.scss"

const SwitchSwiper = () => {
    const [currentCategory, setCurrentCategory] = useState('karting');

    const categories = Object.keys(imagesByCategory);

    const visitButtonStyles = {
        marginTop: '32px',
        '@media (min-width: 768px)': {
            marginTop: '40px',
        }
    }

    return (
        <div className={styles.family}>
            <div className={styles.family__container}>
                <div className={styles.family__header}>
                    <a href={adventica} target="_blank" className={styles.family__logo}>
                        <Image src="/images/family_logo.png" alt='' width={630} height={160} />
                    </a>
                    <div className={title.block__title}>Центр для всей семьи</div>
                    <Tabs customClasses={[styles.family__buttons]} categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} labels={imagesByCategory} />
                </div>
                <Slider customClasses={[styles.family__imageSwiper]} info={imagesByCategory[currentCategory]} />
                <VisitButton customClasses={[styles.family__visit]} link={adventica} />
            </div>
        </div>
    );
};

export default SwitchSwiper;