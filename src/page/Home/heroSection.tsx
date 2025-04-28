import Image from 'next/image'
import Picture from '../../../public/images/picture.png'
import quote from '../../../public/images/quote.svg'
import React from 'react'
import '../../styles/Home/heroSection.css'

export const HeroSection = () => {
    return (
        <>
            <div className="intro-section">
                <div className="intro-left">
                    <div className="intro-text-wrapper">
                        <h1 className="intro-title">
                            Hi, I&apos;m <span className='text-primary'> Zainab </span><br />Front-End Developer <br /><span className="intro-highlight">(Next.js)</span>
                        </h1>
                        <p className="intro-description">
                            Crafting modern, responsive websites where technology meets creativity
                        </p>
                        <div className="intro-button-wrapper">
                            <button className="intro-button">Contact me!!</button>
                        </div>
                    </div>
                </div>
                <div className="intro-right">
                    <div className="intro-image-container">
                        <Image src={Picture} alt="Picture" className='md:p-10' />
                    </div>
                    <div className="intro-banner">
                        <div className="intro-banner-bar"></div>
                        <p className="intro-banner-text">
                            Currently working on <span className="text-white">Portfolio</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="quote-section">
                <Image src={quote} alt="quote" className="quote-image" />
            </div>

        </>
    )
}
