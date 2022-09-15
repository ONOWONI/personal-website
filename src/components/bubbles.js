export default function Bubbles(props) {
    const styles= {
        transform: props.isOver ? "scale(-1,-1)" : "scale(1,1)"
    }


    return (
        <div className="bubble"
        onMouseEnter={props.onMouseEnter}
        style={styles}
        onMouseOut={props.mouseOut}>
            {props.name}
        </div>
    )
}