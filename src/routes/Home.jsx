import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Stack, Row, Col } from 'react-bootstrap'
import styles from './Home.module.css'
import MainCalendar from '../components/MainCalendar'
import List from '../components/List'


function Home() {
  return (
    <Stack className={`${styles.bgHome}`}>
      <Container fluid>
        <h1 className={`text-center mt-3 ${styles.homeHeader}`}>Just To-Do It</h1>
        <Row>
          <Col xs={12} lg={6} xl={5} xxl={6}>
            <MainCalendar/>
          </Col>
          <Col xs={12} lg={6} xl={7} xxl={6}>
            <List />
          </Col>
        </Row>
      </Container>
    </Stack>
  )
}

export default Home