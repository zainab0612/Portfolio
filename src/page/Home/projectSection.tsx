import Image from 'next/image'
import ableton from '../../../public/images/Ableton.png'
import a2z from '../../../public/images/A2Z Techverse.png'
import foodpanda from '../../../public/images/foodpanda.png'
import React from 'react'
import '../../styles/Home/projectSection.css'

export const ProjectSection = () => {
    return (
        <>
            <div className="project-section">
                <div className="project-heading">
                    <h1 className="project-title">
                        <span className="text-primary">#</span>projects
                    </h1>
                    <div className="project-line"></div>
                </div>

                <div className="project-cards">
                    <div className="project-card">
                        <Image src={ableton} alt="group" className="project-image" />
                        <div className="project-stack">HTML CSS JS</div>
                        <div className="project-content">
                            <h1 className="project-name">Ableton</h1>
                            <p className="project-description">
                                A professional clone of the Ableton &apos;About&apos; page.
                            </p>
                            <div className="project-button-wrapper">
                                <a href="https://zainab0612.github.io/Ableton/" target="_blank">
                                    <button className="project-button">Live</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <Image src={a2z} alt="group" className="project-image" />
                        <div className="project-stack">HTML CSS</div>
                        <div className="project-content">
                            <h1 className="project-name">A2Z Techverse</h1>
                            <p className="project-description">A2Z Techverse is IT Software Agency</p>
                            <div className="project-button-wrapper">
                                <a href="https://zainab0612.github.io/BQ-Assignment-II/" target="_blank">
                                    <button className="project-button">Live</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <Image src={foodpanda} alt="group" className="project-image" />
                        <div className="project-stack">HTML CSS</div>
                        <div className="project-content">
                            <h1 className="project-name">Foodpanda-Clone</h1>
                            <p className="project-description">
                                A front-end replica of the Foodpanda website, highlighting homepage structure.
                            </p>
                            <div className="project-button-wrapper">
                                <a href="https://zainab0612.github.io/foodpanda_clone/" target="_blank">
                                    <button className="project-button">Live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
