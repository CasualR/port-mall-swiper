import React from 'react';
import Image from 'next/image';

const Tabs = ({ categories, currentCategory, setCurrentCategory, labels }) => {

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    return (
        <>
            <div className='buttons'>
                <div className='buttons__container'>
                    {categories.map((category, index) => (
                        <React.Fragment key={category}>
                            {index > 0 && <Image src='/images/romb.svg' alt='' width={10} height={11} />}
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={currentCategory === category ? 'button-active' : ''}
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