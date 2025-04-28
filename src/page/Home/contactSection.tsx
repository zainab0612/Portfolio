import Image from 'next/image'
import github from '../../../public/images/Github.svg'
import email from '../../../public/images/Email.svg'
import quote from '../../../public/images/quote (1).svg'
import React from 'react'
import '../../styles/Home/contactSection.css'

export const ContactSection = () => {
    return (
        <>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-heading">
                        <h1 className="contact-title">
                            <span className="text-primary">#</span>contacts
                        </h1>
                        <div className="contact-line"></div>
                    </div>

                    <div className="contact-content">
                        <p className="contact-paragraph">
                            I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
                        </p>
                    </div>
                </div>

                <div className="contact-right">
                    <div className="contact-card">
                        <div className="contact-card-title">Message me here</div>

                        <div className="contact-item">
                            <a href="https://github.com/zainab0612" target="_blank" className="contact-link">
                                <Image src={github} alt="Github" className="contact-icon" />
                                <span className="contact-text">github.com/zainab0612</span>
                            </a>
                        </div>

                        <div className="contact-item pr-2">
                            <a href="mailto:znaeem0612@gmail.com" className="contact-link">
                                <Image src={email} alt="EMAIL" className="contact-icon" />
                                <span className="contact-text contact-left">znaeem0612@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quote-section">
                <Image src={quote} alt="quote" className="quote-image" />
            </div>

        </>
    )
}
