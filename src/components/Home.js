import logo from '../img/personal web logo.svg';



export default function Home() {
    return (
        <div className="home-page glass-effect home-page-content">
            <div id="name-container">
                <p id="hi-text">Hi, my name is</p>
                <p id="onowoni-text" >ONOWONI</p>
                    <p id="daniel-text" >Daniel</p>
            </div>
            <div className="partition-container">
                <div id="left-partition-home-page">
                    <p id="web-dev-text">Innovative Digital Services for Your Business Success</p>
                    <p id="description-text">Maximize your business potential with my customized digital services.
                        Whether you're a small business aiming for an online presence, an entrepreneur seeking technological freedom, a startup in need of a polished web design,
                        or a local business looking to embrace digital transformation, I am here to help.
                        I specialize in website development for non-technical founders, custom software solutions for small enterprises, enhancing user experiences for online businesses,
                        building MVPs for startups, developing digital platforms for non-profits, and increasing online sales for businesses. Let's bring your vision to life.
                    </p>
                </div>
                <div id='right-partition-home-page'>
                    <a href="/contact" >Let's Talk</a>
                    <div>
                        <img src={logo} alt='My logo' className='my-logo' id='logo-1'/>
                        <img src={logo} alt='My logo' className='my-logo' id='logo-2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}








