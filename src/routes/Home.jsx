import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Stack, Row, Col } from 'react-bootstrap'
import styles from './Home.module.css'
import MainCalendar from '../components/MainCalendar'
import List from '../components/List'


// Make Categories for tasks Ex. school, work, home, chores, etc. 
// Make Calendar and List smaller to fit on homepage side by side
function Home() {
  return (
    <Stack className={`${styles.bgHome}`}>
      <Container fluid>
        <h1 className={`text-center mt-3 ${styles.homeHeader}`}>Just To-Do It</h1>
        <Row className='justify-content-evenly'>
          <Col xs={3}>
            <Link to="/todo" style={{ color: 'black', textDecoration: 'none' }}>
              <Button className={`${styles.homePlanBtn} bg-success btn-outline-success text-white btn-lg mt-2`}>Start Planning</Button>
            </Link>
          </Col>
          <Col xs={3}>
            <Link to="/progress" style={{ color: 'black', textDecoration: 'none' }}>
              <Button className={`${styles.homePlanBtn} bg-success btn-outline-success text-white btn-lg mt-2`}>View Progress</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <MainCalendar className={styles.homeCalendar}/>
          </Col>
          <Col xs={12}>
            <List/>
          </Col>
        </Row>
      </Container>
    </Stack>
  )
}

export default Home