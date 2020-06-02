import React from 'react'
import "../styles.css"
import headerPic from '../images/headerPic.jpg'
import arrow from '../images/arrow.svg'
import Rectangle from 'react-rectangle'
import HeadShake from 'react-reveal/HeadShake';
import Cards from './Cards.js'



export default class Home extends React.Component {
    // state = {
    //     hover: false
    // }

    // hoverAnimate = () => {
    //     this.setState({ hover: true }),
    //         <HeadShake>{card}</HeadShake>
    // }
    // hoverAnimateOff = () => {
    //     this.setState({ hover: false })
    // }
    render() {
        return (
            <div>
                {/* top picture */}
                <img className="headerPic" src={headerPic} alt="header picture" />

                {/* Rectangle Overlay */}
                <Rectangle className="whiteRectangle">
                    <h2>Passion for Temporary Structures</h2>
                    <Rectangle className="purpleLine"></Rectangle>
                    <p>NUSSLI is a global leader in the provision of temporary structures for sporting, cultural and business events. We offer you individually tailored solutions, from the initial concept to final implementation. Benefit from short completion times and our high level of quality. Take a stroll with us through this behind-the-scenes look at NUSSLI, and get to know us better.</p>
                    <p className="readMore">Read More <img className="arrow" src={arrow} alt="arrow" /></p>
                </Rectangle>

                {/* What We Have */}
                <Rectangle className="lightPurple">
                    <h2>What We Have</h2>
                    <Rectangle className="purpleLine"></Rectangle>
                    <table className="fourCol">
                        <tr>
                            <th>300,000</th>
                            <th>400</th>
                            <th>80+</th>
                            <th>2000</th>
                        </tr>
                        <tr>
                            <td>Seats</td>
                            <td>Employees</td>
                            <td>Awards</td>
                            <td>Projects</td>
                        </tr>
                    </table>
                </Rectangle>

                {/* Our Projects */}
                <h2 className="projects">Our Projects</h2>
                <Rectangle className="purpleLine"></Rectangle>
                <h2>Trade Fair Booth Seat</h2>
                <p>For the 88th time, the automobile is being celebrated in Geneva. Over a total exhibition area of 102,000 square meters, around 700 brands are showcasing the first new European automobile products and innovations of the year — including Škoda, Seat and Volkswagen. The automobile manufacturers are presenting itselfs with a new exhibition stand, built by NUSSLI and AMBROSIUS.</p>
                <p className="readMore">Read More <img className="arrow" src={arrow} alt="arrow" /></p>

                {/* comprehensive  service*/}
                <Rectangle className="aToZBox">
                    <h2>Comprehensive Service from A to Z</h2>
                    <Rectangle className="purpleLine"></Rectangle>
                    <p>With us, your event is in the best of hands, right from the very beginning. We support you in all project phases and provide you with knowhow and foresight while advising you every step of the way. Our services range from consulting services and planning to production, assembly and operation, as well as dismantling and warehousing.</p>

                </Rectangle>

                {/* adding cards */}
                {/* <HeadShake> */}
                <Cards />
                {/* <Cards onMouseEnter={this.hoverAnimate} onMouseLeave={this.hoverAnimateOff}/> */}
                {/* </HeadShake> */}

            </div>
        )
    }


}