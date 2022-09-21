import styled, { keyframes} from "styled-components"
import kunai from "../img/kunai.svg";

export default function Home() {

    // transform: rotate(180deg);
    // transform: rotate(270deg);
    // transform: rotate(360deg);
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
    // animation-iteration-count: infinite;
    // animation-duration : ${props.animate_list[4]}s;
    return (
        <div className="home background">
            <div className="home-container">
                {/* <img src={kunai} alt="kunai" className="kunai" /> */}
                <div>
                    Welcome
                    <p>Hi, I'm Daniel a python web developer with both front and backend skills. I started programmming because of the pandemic and i continued because i fell in love with it. i love you very much.</p>
                    <p>lorem impusm is a text that we use to fill spaces in html. it is not availaible in react's stupid jsx because it is stupid and not worth it just like everybody is to everybody</p>
                    <p>the auto complete on this stupid babel is just shit and i just want to say that there are many things wrong with react, it is one of the worst frameworks that i have used. No cancel that, it is the worst framework that i have used and yes i have used flask</p>
                </div>
                <Kunai src={kunai} alt="logo" className="kunai" />
            </div>
        </div>
    )
}








