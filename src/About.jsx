import React from "react";
import {NavLink} from 'react-router-dom'
import Main from "./HomeAbout"

const About = () => {
    return(
        <>
            <Main line="About" brand="Tesla" visit="/" more="Tesla's mission is to accelerate the world's transition to sustainable energy. Tesla was founded in 2003 by a group of engineers who wanted to prove that people didn't need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars." btn="Home Page" image="https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg" />
        </>
    )
}
export default About;
// We are the best electronic car company