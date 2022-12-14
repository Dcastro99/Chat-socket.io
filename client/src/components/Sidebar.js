import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATION_KEY = 'conversation'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY)
  return (
    <div style={{ width: '250px' }} className='d-flex flex-column'>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>
              Conversations
            </Nav.Link >
            <Nav.Item>
              <Nav.Link eventKey={CONTACTS_KEY}>
                Contacts
              </Nav.Link >
            </Nav.Item>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

    </div>
  )
}
