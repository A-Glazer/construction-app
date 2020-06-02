import React from 'react'
import "../styles.css"
import headerPic from '../images/headerPic.jpg'
import arrow from '../images/arrow.svg'
import Rectangle from 'react-rectangle';


export default class Home extends React.Component {

    render() {
        return (
            <div>
                {/* top picture */}
                <h1>Home Page</h1>
                <img className="headerPic" src={headerPic} alt="header picture" />

                {/* Rectangle Overlay */}
                <Rectangle className="whiteRectangle">
                    <h2>Passion for Temporary Structures</h2>
                    <Rectangle className="purpleHeader"></Rectangle>
                    <p>NUSSLI is a global leader in the provision of temporary structures for sporting, cultural and business events. We offer you individually tailored solutions, from the initial concept to final implementation. Benefit from short completion times and our high level of quality. Take a stroll with us through this behind-the-scenes look at NUSSLI, and get to know us better.</p>
                    <p className="readMore">Read More <img className="arrow" src={arrow} alt="arrow" /></p>
                </Rectangle>

            </div>
        )
    }


}