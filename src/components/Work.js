import img from '../img/School_1.jpg'

export default function Work() {
    return (
        <div className="work background">
            <h1 className='project-header'>Here is a list of projects that i have done</h1>
            <div className='project-container '>
                <div className="left-card">
                    <div className="project-img">
                        <img src={img} alt="Home screen of project" />
                    </div>
                    <div className="project-text">
                        <h1>Title</h1>
                        <p>name is an app Made with the python Flask framework that help users in documenting their day,
                            It has basic CRUD funtionalities as well as a login system that uses cookies to remember users
                        </p>
                        <p>Check out Name <a href='jfj' className='out-link'>here</a></p>
                    </div>
                </div>
                <div className="right-card">
                    <div className="project-img">
                        <img src={img} alt="Home screen of project" />
                    </div>
                    <div className="project-text">
                        <h1>Title</h1>
                        <p>name is an app Made with the python Flask framework that help users in documenting their day,
                            It has basic CRUD funtionalities as well as a login system that uses cookies to remember users
                        </p>
                        <p>Check out Name <a href='jfj' className='out-link'>here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}