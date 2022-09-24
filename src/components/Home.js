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
                    Welcome
                    <p>Hi, I'm Daniel a python web developer with both front and backend skills. I started programmming because of the pandemic and i continued because i fell in love with it. i love you very much.</p>
                    <p>lorem impusm is a text that we use to fill spaces in html. it is not availaible in react's stupid jsx because it is stupid and not worth it just like everybody is to everybody</p>
                    <p>the auto complete on this stupid babel is just shit and i just want to say that there are many things wrong with react, it is one of the worst frameworks that i have used. No cancel that, it is the worst framework that i have used and yes i have used flask</p>
                </Textdiv>
                <img src={star1} alt="logo" className="star" />
                <Kunai src={kunai} alt="logo" className="kunai" />
            </div>
        </div>
    )
}








