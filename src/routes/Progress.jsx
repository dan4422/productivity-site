import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Progress.module.css'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import CompletedBarChart from '../components/CompletedBarChart'

function Progress() {
  return (
    <Container fluid className='p-4'>
      <h1 className='text-center border-bottom border-4 border-dark pb-3'>Check Out That Progress!</h1>
      <Row className='justify-content-center mt-3'>
        <Col xs={12} md={7} lg={6}>
          <BarChart/>
        </Col>
        <Col xs={12} md={5} lg={3}>
          <PieChart/>
        </Col>
      </Row>
      <Row className='justify-content-center mt-4'>
        <Col xs={12} md={6} lg={6}>
          <CompletedBarChart />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <LineChart />
        </Col>
      </Row>
    </Container>
  )
}

export default Progress