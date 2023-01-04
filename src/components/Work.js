import img from '../img/djurnal.png'
import poolinc from '../img/poolinc.png'
import cv from "../img/DanielOnowoni.pdf";
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'

export default function Work() {
    return (
        <div className="work background">
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections >
                <FullpageSection>
                    <h1 className='project-header'>Here is a list of projects that i have done</h1>
                    <a href={cv} id='cv'>Download CV</a>
                    <div className="left-card project-card">
                        <div className="project-img">
                            <img src={img} alt="Home screen of project" />
                        </div>
                        <div className="project-text">
                            <h1>Poultry Plus</h1>
                            <p>Introducing the ultimate tool for livestock owners! Our site makes it easy to keep track of your animals, and stay on top of important tasks like feeding. Plus,
                                our built-in bookkeeping features allow you to easily track your expenses and income, so you can keep your farm or ranch running smoothly. With our user-friendly interface and powerful features,
                                you'll have everything you need to manage your livestock and your business all in one place.
                            </p>
                            <p className='bottom-text'>Check it Out <a href='https://djurnal.herokuapp.com/' className='out-link' target="_blanc" >here</a></p>
                            <p className='bottom-text'>Github code <a href='https://github.com/ONOWONI/poultry-plus.git' className='out-link' target="_blanc" >here</a></p>
                            <p className='bottom-text'>Built with Django, JavaScript, HTML, CSS </p>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className="right-card project-card not-first">
                        <div className="project-img">
                            <img src={img} alt="Home screen of project" />
                        </div>
                        <div className="project-text">
                            <h1>Djurnal</h1>
                            <p>Welcome to our daily journaling website! We understand the importance of taking time to reflect on and document your daily experiences, and our platform makes it easy to do just that. With our user-friendly interface, you can quickly and easily record your thoughts, feelings, and memories from each day. Whether you're looking to track your personal growth, set and achieve goals, or simply have a place to vent and process your emotions, our website is here to help. Sign up now and start documenting your days!"
                            </p>
                            <p className='bottom-text'>Check It Out <a href='https://poolinc.netlify.app/' className='out-link' target="_blanc" >here</a></p>
                            <p className='bottom-text'>Github code <a href='https://github.com/ONOWONI/my_blog_post_Flask_web.git' className='out-link' target="_blanc" >here</a></p>
                            <p className='bottom-text'>Built with Flask, HTML, css</p>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className="left-card project-card not-first">
                        <div className="project-img">
                            <img src={poolinc} alt="Home screen of project" />
                        </div>
                        <div className="project-text">
                            <h1>Poolinc</h1>
                            <p>"Looking for a reliable and professional pool cleaning service? Look no further!
                                 Our team of experienced and certified pool cleaners is here to help you keep your pool sparkling clean and clear all season long. From regular maintenance and chemical balancing to equipment repairs and replacements, we have the skills and equipment to handle all of your pool care needs. With competitive pricing and flexible scheduling, we make it easy to keep your pool in top shape. Contact us today and let us help you enjoy your pool to the fullest!"
                            </p>
                            <p className='bottom-text'>Check out Poolinc <a href='/work' className='out-link' target="_blanc" >here</a></p>
                            <p className='bottom-text'>Github code <a href='https://github.com/ONOWONI/poolinc.git' className='out-link' target="_blanc" >here</a></p>
                            <p className='bottom-text'>Built with React, CSS</p>
                        </div>
                    </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
        </div>

    )
}