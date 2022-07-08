import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Progress.module.css'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import CompletedBarChart from '../components/CompletedBarChart'
import ColorLabelPieChart from '../components/ColorLabelPieChart'

function Progress() {
  return (
    <Container fluid className='p-4'>
      <h1 className={`${styles.headerText} text-center pb-3`}>Check Out That Progress!</h1>
      <Row className='justify-content-start mt-3'>
        <Col xs={12} md={6} lg={6}>
          <BarChart/>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <PieChart/>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <ColorLabelPieChart/>
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