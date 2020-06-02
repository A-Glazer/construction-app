import React from 'react'
import "../styles.css"
import headerPic from '../images/headerPic.jpg'
import arrow from '../images/arrow.svg'
import Rectangle from 'react-rectangle'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default class Home extends React.Component {

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
                <Container>
                    <CardDeck className="card-padding">
                        <Row>
                            <Col sm>
                                <Card>
                                    <Card.Header as="h5">Card 1</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm>

                                <Card>
                                    <Card.Header as="h5">Card 2</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm>
                                <Card>
                                    <Card.Header as="h5">Card 3</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <Card>
                                    <Card.Header as="h5">Card 6</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm>
                                <Card>
                                    <Card.Header as="h5">Card 4</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm>
                                <Card>
                                    <Card.Header as="h5">Card 5</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </CardDeck>
                </Container>
            </div>
        )
    }


}