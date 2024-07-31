import React from "react"
import figma from "../img/figma.svg"
import reactsvg from "../img/react-2.svg"
import django from "../img/django.png"
import python from "../img/python-4.svg"
import javascript from "../img/logo-javascript.svg"
import flask from "../img/flask.png"
import fastapi from "../img/fastapi-1.svg"
import css from "../img/css-3.svg"
import html from "../img/html-1.svg"
import nodejs from "../img/node.png"
import photoshop from "../img/photoshop.svg"

export default function Skills() {
    return (
      <div className="service-page home-page-content glass-effect">
        <div className="service-top-card-container">
          <div>
            <p className="service-header">WEB DEVELOPMENT</p>
            <p className="service-page-description-text">I provide a comprehensive range of web development services, from creating basic static websites to complex e-commerce platforms. I can assist you with every step of your web development project, from design and development to hosting and maintenance.</p>
            <p className="service-page-description-text">I do this with the help of these tools</p>
            <div className="logo-container">
              <img src={python} alt="python logo" />
              <img src={javascript} alt="javascript logo" />
              <img src={django} alt="django logo" />
              <img src={nodejs} alt="nodejs logo" />
              <img src={flask} alt="flask logo" />
              <img src={fastapi} alt="fastapi logo" />
            </div>
          </div>
          <div>
            <p className="service-header">WEB DESIGN</p>
            <p className="service-page-description-text">Need websites that are visually appealing, user-friendly and tailored to your business needs? I work with you to understand your goals and create a design that will help you achieve them using these tools</p>
            <div className="logo-container">
              <img src={figma} alt="figma logo" />
              <img src={html} alt="html logo" />
              <img src={css} alt="css logo" />
              <img src={reactsvg} alt="react logo" />
              <img src={photoshop} alt="phohtoshop logo" />
            </div>
          </div>
        </div>
        <div className="service-bottom-card">
          <p className="service-header">DIGITAL MARKETING</p>
          <p className="service-page-description-text">Businesses can grow their online presence and reach their target audience through a variety of digital marketing channels, such as search engine optimization (SEO) and content marketing. Businesses of all sizes can work with a digital marketing expert like me to create and implement custom marketing strategies that meet their specific needs and goals.</p>
        </div>
      </div>
    )
}