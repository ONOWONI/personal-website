import React from "react"
import Bubbles from "./bubbles"
import reactsvg from "../img/react-2.svg"
import django from "../img/django-community.svg"
import python from "../img/python-4.svg"
import javascript from "../img/logo-javascript.svg"
import flask from "../img/flask.svg"
import fastapi from "../img/fastapi-1.svg"
import css from "../img/css-3.svg"
import html from "../img/html-1.svg"

export default function Skills() {
    const [yes, setYes] = React.useState(generateIdClick())


    function generateIdClick() {
        let arr = []
        const names = [reactsvg, django,flask,fastapi,html,css, python,javascript]
        for (let i = 0; i < 8; i++) {
          arr.push({
            id: i+1,
            name: names[i],
            isClicked : false,
            animate_number : randoms()
            })
          }
        return arr
        }

    function randoms() {
      const xTop = Math.floor(Math.random() * (window.innerWidth - 200))
      const yTop = Math.floor(Math.random() * (window.innerHeight - 200))
      const xLeft = Math.floor(Math.random() * (window.innerWidth - 200))
      const yLeft = Math.floor(Math.random() * (window.innerHeight - 200))
      const xBottom = Math.floor(Math.random() * (window.innerWidth - 200))
      const yBottom = Math.floor(Math.random() * (window.innerHeight - 200))
      const xRight = Math.floor(Math.random() * (window.innerWidth - 200))
      const yRight = Math.floor(Math.random() * (window.innerHeight - 200))
      const speed = Math.floor(Math.random() * 30) + 10
      return [xTop, yTop, xLeft, yLeft, xBottom, yBottom, xRight, yRight, speed]
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
       animate_list={item.animate_number}
       mouseOut={() => mouseOut(item.id)}
       />)
    return(
        <div className="skills background">
            {bubbles}
        </div>
    )
}