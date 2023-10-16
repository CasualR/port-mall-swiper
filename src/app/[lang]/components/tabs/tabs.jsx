import React from 'react';
import Image from 'next/image';

import styles from '../../scss/tabs/tab.module.scss'

const Tabs = ({ categories, currentCategory, setCurrentCategory, labels, customClasses }) => {

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    return (
        <>
            <div className={`${styles.buttons} ${customClasses ? customClasses.join(' ') : ''}`}>
                <div className={styles.buttons__container}>
                    {categories.map((category, index) => (
                        <React.Fragment key={category}>
                            {index > 0 && <Image src='/images/romb.svg' alt='' width={10} height={11} />}
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={currentCategory === category ? styles.button__active : ''}
                            >
                                {labels[category].name}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tabs;