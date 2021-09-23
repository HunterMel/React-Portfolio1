import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import React from 'react'

import Footer from '../Footer'


function Projects() {
    const portfolio = [
        {
            name: 'Chore-Wallet',
            description: 'This application provides an inovative solution to a modern world, where parents are able to make electronic allowance payments to their children after completing their chores',
            img: require('../../assets/chore.png').default,
            github: 'https://github.com/Trayehunter1/ChoreWallet',
            deployed: 'https://chore-wallet924376.herokuapp.com/'
        },

        {
            name: 'Object-Relational-Mapping',
            description: 'A back-end application for an e-commerce site, this project uses Express.js API and configure it to use Sequelize to interact with a MySQL database',
            img: require('../../assets/mapping.png').default,
            github: 'https://github.com/Trayehunter1/Object-Relational-Mapping',
            deployed: 'https://trayehunter1.github.io/Object-Relational-Mapping/'
        },

        {
            name: 'Budget-Tracker',
            description: 'Updated an existing budget tracker application to allow for offline access and functionality',
            img: require('../../assets/budget.png').default,
            github: 'https://github.com/Trayehunter1/Budget-Tracker',
            deployed: ' https://trayehunter1.github.io/Budget-Tracker/'
        },
        // {
        //     name: 'Chore-Wallet',
        //     description: 'A collaborative assignment which allows users to select a chore to accomplish, display thier weekly schedule as it uploads to a calender, and use a payment functionality to recieve direct deposits',
        //     img: require('../../assets/chore.png').default,
        //     github: 'https://github.com/Trayehunter1/ChoreWallet',
        //     deployed: 'https://trayehunter1.github.io/ChoreWallet/'
        // },

    ]

    return (
        <>
            <Container id='projects' fluid>
                <Row>
                    {portfolio.map((portfolio) => (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={portfolio.img} fluid />
                                <Card.Body>
                                    <Card.Title>{portfolio.name}</Card.Title>
                                    <Card.Text>
                                        {portfolio.description}
                                    </Card.Text>
                                    <Button variant='info' href={portfolio.github} target='_blank'>GitHub</Button>
                                    <Button variant='warning' href={portfolio.deployed} target='_blank'>Application</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Projects