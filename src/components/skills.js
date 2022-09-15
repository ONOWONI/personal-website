import React from "react"
import Bubbles from "./bubbles"

export default function Skills() {
    const [yes, setYes] = React.useState(generateIdClick())


    function generateIdClick() {
        let arr = []
        const names = ["React","Django","Flask","FastAPI","HTML","CSS", "Python", "Javascript"]
        for (let i = 0; i < 8; i++) {
          arr.push({
            id: i+1,
            name: names[i],
            isClicked : false
            })
          }
        return arr
        }
    function handleMouse(itemID) {
    setYes(prev => {
      return prev.map(item => {
        return item.id === itemID ? {...item, isClicked: !item.isClicked} : item
        })
      })
    }

    function mouseOut(itemID) {
      setYes(prev => {
        return prev.map(item => {
          return item.id === itemID ? {...item, isClicked: !item.isClicked} : item
        })
      })
    }




    const bubbles = yes.map(item => <Bubbles key={item.id}
       id={item.id}
       onMouseEnter={() => handleMouse(item.id)}
       isOver={item.isClicked}
       name={item.name}
       mouseOut={() => mouseOut(item.id)}
       />)
    return(
        <div className="skills background">
            {bubbles}
        </div>
    )
}