import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { arrayOf } from 'prop-types'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
    const [loading, setLoading] = useState(true)

    return (

            <>
                <Container>
                    {/*mapeo de las creaciones*/}
                        <Col sm={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                </Container>
            </>
    )
}

export default Home