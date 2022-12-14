import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';


export default function Login({ onIdSubmit }) {

  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <Container class='align-items-center d-flex' style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
          <Form.Label>
            Enter You Id
          </Form.Label>
          <Form.Control type='text' ref={idRef}></Form.Control>
        </Form.Group>
        <Button type='submit'>Login</Button>
        <Button onClick={createNewId} variant='secondary'>Create A New Id </ Button>

      </Form>
    </Container>
  )
}

