import img from '../img/djurnal.png'
import poolinc from '../img/poolinc.png'
import poolinc2 from '../img/secondpoolinc.png'
import cv from "../img/lineresume.docx";
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
                            <h1>Djurnal</h1>
                            <p>this is an app Made with the python Flask framework that help users in documenting their day,
                                It has basic CRUD funtionalities as well as a login system that uses cookies to remember users
                            </p>
                            <p>Check out Name <a href='https://djurnal.herokuapp.com/' className='out-link' target="_blanc" >here</a></p>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className="right-card project-card not-first">
                        <div className="project-img">
                            <img src={poolinc} alt="Home screen of project" />
                        </div>
                        <div className="project-text">
                            <h1>Poolinc</h1>
                            <p>This is an two part app that helps the poolinc crew find new customers
                                the frontend is built with react and it fetches data from a Django rest Framework API on the backend
                            </p>
                            <p>Check out Poolinc <a href='https://poolinc.netlify.app/' className='out-link' target="_blanc" >here</a></p>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection>
                    <div className="left-card project-card not-first">
                        <div className="project-img">
                            <img src={poolinc2} alt="Home screen of project" />
                        </div>
                        <div className="project-text">
                            <h1>Poolinc</h1>
                            <p>This is an two part app that helps the poolinc crew find new customers
                                the frontend is built with react and it fetches data from a Django rest Framework API on the backend
                            </p>
                            <p>Check out Poolinc <a href='/work' className='out-link' target="_blanc" >here</a></p>
                        </div>
                    </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
        </div>

    )
}