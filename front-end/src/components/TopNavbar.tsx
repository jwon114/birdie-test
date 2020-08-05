import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logo from '@App/components/Logo';

const LogoUrl = require('../assets/images/logo-birdie.svg');

interface TopNavBarProps {
  careRecipients: Array<string>;
  eventTypes: Array<string>;
  submitForm: Function;
}

const TopNavBar = (props: TopNavBarProps) => (
  <Navbar bg="light" style={{borderBottom: '2px solid #55c5c1'}}>
    <Row>
      <Col xs={2}>
        <Navbar.Brand>
          <Logo src={LogoUrl} />
        </Navbar.Brand>
      </Col>
      <Col xs={10}>
        <Form onSubmit={() => props.submitForm()}>
          <Form.Row>
            <Col xs={4}>
              <Form.Label>Care Recipient</Form.Label>
              <Form.Control as="select" custom={true}>
                <option>1</option>
              </Form.Control>
            </Col>
            <Col xs={4}>
              <Form.Label>Event Type</Form.Label>
              {console.log('props.EventTypes', props.eventTypes)}
              <Form.Control as="select" custom={true}>
                <option>1</option>
              </Form.Control>
            </Col>
            <Col xs="auto" style={{ display: 'flex', alignItems: 'flex-end'}}>
              <Button variant="primary" type="submit" style={{backgroundColor: '#0459b4'}}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  </Navbar>
);

export default TopNavBar;