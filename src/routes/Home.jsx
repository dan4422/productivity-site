import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Stack, Row, Col } from 'react-bootstrap'
import styles from './Home.module.css'
import MainCalendar from '../components/MainCalendar'

function Home() {
  return (
    <Stack className={`${styles.bgHome}`}>
      <Container>
        <Row>
          <h1 className={`text-center mt-3 ${styles.homeHeader}`}>Just do it STOOPID</h1>
          <Link to="/todo" style={{ color: 'black', textDecoration: 'none' }}>
            <Button className={`${styles.homePlanBtn} bg-success btn-outline-success text-white btn-lg mt-2`}>Start Planning</Button>
          </Link>
          <MainCalendar />
        </Row>
      </Container>
    </Stack>
  )
}

export default Home