import styled, { keyframes} from "styled-components"


export default function Bubbles(props) {



    const text =keyframes`
    0% {
        left: ${props.animate_list[0]}px;
        top: ${props.animate_list[1]}px;
    }
    100% {
        background-color : green;
        left: ${props.animate_list[2]}px;
        top: ${props.animate_list[3]}px;
    }
    `


    const Named = styled.div`
    left: ${props.animate_list[0]}px;
    top: ${props.animate_list[1]}px;
    animation: ${text};
    animation-duration : 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: ${props.isOver ? "paused" : "running"}
    `
    // animation-duration : ${props.animate_list[4]}s;


    return (
        <Named className="bubble"
        onMouseEnter={props.onMouseEnter}
        // style={styles}
        onMouseOut={props.mouseOut}
        // data-x={props.animate_list[0]}
        // data-y={props.animate_list[1]}
        >
            {props.name}
        </Named>
    )
}

