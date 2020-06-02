import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default class Cards extends React.Component {



    render() {

        let card1 = (
            <Card>
                <Card.Header as="h5" > Card 1</Card.Header >
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

        let card2 = (<Card>
            <Card.Header as="h5">Card 2</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>)

        let card3 = (<Card>
            <Card.Header as="h5">Card 3</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>)

        let card4 = (
            <Card>
                <Card.Header as="h5">Card 4</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

        let card5 = (
            <Card>
                <Card.Header as="h5">Card 5</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

        let card6 = (
            <Card>
                <Card.Header as="h5">Card 6</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
        return (
            <div>
                <Container>
                    <CardDeck className="card-padding">
                        <Row>
                            <Col sm className="hvr-pop">{card1}</Col>
                            <Col sm className="hvr-pop">{card2}</Col>
                            <Col sm className="hvr-pop">{card3}</Col>
                        </Row>
                        <Row>
                            <Col sm className="hvr-pop">{card4}</Col>
                            <Col sm className="hvr-pop">{card5}</Col>
                            <Col sm className="hvr-pop">{card6}</Col>
                        </Row>
                    </CardDeck>
                </Container>
            </div >
        )
    }
}
