import img from '../img/poultryplus.png';
import img2 from '../img/djurnal.png';
import poolinc from '../img/poolinc.png';
import cv from '../img/danielonowonicv.pdf';
import arrow from "../img/arrow.png"
import github from "../img/github-3.svg"


export default function Work() {
    return (
        <div className="work">
            <div id='work-intro-text-container'>
                <p className='project-header'>Here are some of the projects that i have worked on.</p>
                <div><a href={cv} id='cv' target="_blanc">Resume <img src={arrow} alt="Home screen of project" /></a></div>
            </div>
            <div className='project-card-container'>
                <div className="project-card">
                    <div className="project-img-container">
                        <img src={img} alt="Home screen of project" />
                    </div>
                    <div className='project-text-container'>
                        <p>Poultry Plus</p>
                        <a href='https://github.com/ONOWONI/poultry-plus.git' className='out-link' target="_blanc" ><img src={github} alt="External link" /></a>
                        <a href='https://poultry-plus.onrender.com' className='out-link' target="_blanc" ><img src={arrow} alt="Github link" /></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img-container">
                        <img src={img2} alt="Landing Page of project" />
                    </div>
                    <div className='project-text-container'>
                        <p>Djurnal</p>
                        <a href='https://github.com/ONOWONI/my_blog_post_Flask_web.git' className='out-link' target="_blanc" ><img src={github} alt="Home screen of project" /></a>
                        <a href='https://djurnal.onrender.com' className='out-link' target="_blanc" ><img src={arrow} alt="Home screen of project" /></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img-container">
                        <img src={poolinc} alt="Home screen of project" />
                    </div>
                    <div className='project-text-container'>
                        <p>Poolinc</p>
                        <a href='https://github.com/ONOWONI/poolinc.git' className='out-link' target="_blanc" ><img src={github} alt="Home screen of project" /></a>
                        <a href='https://poolinc.netlify.app/' className='out-link' target="_blanc" ><img src={arrow} alt="Home screen of project" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}