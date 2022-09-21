import styled, { keyframes} from "styled-components"


export default function Bubbles(props) {



    const text =keyframes`
    0% {
        left: ${props.animate_list[0]}px;
        top: ${props.animate_list[1]}px;
    }
    25% {
        background-color : green;
        left: ${props.animate_list[2]}px;
        top: ${props.animate_list[3]}px;
    }
    50% {
        background-color : green;
        left: ${props.animate_list[4]}px;
        top: ${props.animate_list[5]}px;
    }
    75% {
        background-color : red;
        left: ${props.animate_list[6]}px;
        top: ${props.animate_list[7]}px;
    }
    100% {
        background-color : green;
        left: ${props.animate_list[0]}px;
        top: ${props.animate_list[1]}px;
    }
    `


    const Named = styled.div`
    left: ${props.animate_list[0]}px;
    top: ${props.animate_list[1]}px;
    animation: ${text};
    animation-duration : ${props.animate_list[8]}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: ${props.isOver ? "paused" : "running"}
    `


    return (
        <Named className="bubble"
        onClick={props.onMouseEnter}
        >
            {props.name}

        </Named>
    )
}


