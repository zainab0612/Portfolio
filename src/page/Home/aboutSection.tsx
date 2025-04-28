import Image from 'next/image'
import about from '../../../public/images/about-me.png'
import '../../styles/Home/aboutSection.css'
import React from 'react'

export const AboutSection = () => {
    return (
        <>
            <div className="about-section">
                <div className="about-left">
                    <div className="about-heading">
                        <h1 className="about-title">
                            <span className="text-primary">#</span>about-me
                        </h1>
                        <div className="about-line"></div>
                    </div>

                    <div className="about-content">
                        <p className="about-paragraph">
                            I’m an enthusiastic Front-end Developer. My passion lies in building user-centric, interactive, and dynamic web applications that not only look great but solve real-world problems.<br /><br />
                            I’m always open to exciting opportunities and am eager to make a meaningful impact in the world of frontend development.
                        </p>
                        <div className="about-button-wrapper">
                            <button className="about-button">Read more &gt;</button>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-image-wrapper">
                        <Image src={about} alt="Picture" className="about-image" />
                    </div>
                </div>
            </div>

        </>
    )
}
