import styled, { keyframes} from "styled-components"
import kunai from "../img/kunai.svg";
import star1 from "../img/spinning.svg"

export default function Home() {
    const rotate =keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        top : 10px;
        transform: rotate(-90deg);
        transform: rotate(-120deg);
        opacity: 1;
    }
    75% {
        transform: rotate(-120deg);
        right: 80vw;
        opacity: 0;
    }
    100% {
        transform: rotate(-120deg);
        right: 80vw;
        opacity: 0;
    }
    `

    const Kunai = styled.img`
    animation: ${rotate};
    animation-duration : 3s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    `

    const borderbox = keyframes`
    from {
        border: none;
    }
    to {
        border: solid 2px  #ffec19;
    }
    `

    const Textdiv = styled.div`
    animation: ${borderbox};
    animation-duration : 5s;
    animation-delay: 2.5s;
    `

    return (
        <div className="home background">
            <div className="home-container">
                <Textdiv>
                    <p>Hi there! My name is <span className="large-text">Daniel</span> and I am a backend developer with a passion for creating efficient and scalable web applications. I have developed a strong skill set in languages such as Python and JavaScript, as well as backend technologies like Django and Flask.</p>
                    <p>I love the challenge of designing and developing <span className="large-text">Web applications</span> that are both efficient and user-friendly. I've worked with all sorts of APIs, third-party integrations, and <span className="large-text">Databases</span>, and I'm always looking for new ways to improve my skills and stay up-to-date with the latest technologies.</p>
                    <p>In my free time, you can usually find me tinkering with personal projects or <span className="large-text">Nerding</span> out over the latest tech news. I'm always down to chat about programming or just hang out, so don't be shy! Feel free to shoot me a message or connect with me on <a href="https://linkedin.com/in/daniel-onowoni" className="text-link">LinkedIn.</a></p>
                </Textdiv>
                <img src={star1} alt="logo" className="star spinning" />
                <Kunai src={kunai} alt="logo" className="kunai spinning" />
            </div>
        </div>
    )
}








