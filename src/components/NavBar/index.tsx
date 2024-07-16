'use client'
import React, { useEffect, useState } from 'react'

import {
  Container,
  Sidebar,
  Sidenav,
  Content,
  Nav,
  DOMHelper,
  Stack,
} from 'rsuite'
import NavToggle from '../NavToggle'
import Header from '../Header'
import styles from './styles.module.css'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import DashboardIcon from '@rsuite/icons/Dashboard'
import GroupIcon from '@rsuite/icons/legacy/Group'
import MagicIcon from '@rsuite/icons/legacy/Magic'
import Themes from '../Themes'

const { getHeight, on } = DOMHelper
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Frame = (props: any) => {
  const [expand, setExpand] = useState(true)
  const { children } = props
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(getHeight(window))
      const resizeListener = on(window, 'resize', () =>
        setWindowHeight(getHeight(window)),
      )

      return () => {
        resizeListener.off()
      }
    }
  }, [])

  const navBodyStyle: React.CSSProperties = expand
    ? { height: windowHeight - 138, overflow: 'none' }
    : { height: windowHeight - 142 }

  const containerClasses = `${styles['page-container']} ${!expand ? styles['container-full'] : ''}`

  return (
    <Container className={styles.frame}>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 280 : 56}
        collapsible
      >
        <Sidenav.Header>
          <Stack
            className={styles.brand}
            // style={{ borderBottom: '0.1px solid #4b5563' }}
          >
            <span style={{ marginLeft: 14 }}>LAVAJATO - EROS</span>
          </Stack>
        </Sidenav.Header>
        <Sidenav
          expanded={expand}
          appearance="subtle"
          defaultOpenKeys={['2', '3']}
        >
          <Sidenav.Body style={navBodyStyle}>
            <Nav>
              <Nav.Item
                // as={Link}
                // href="/"
                eventKey="1"
                icon={<DashboardIcon />}
              >
                Dashboard
              </Nav.Item>
              <Nav.Item as={Link} href="/" eventKey="2" icon={<GroupIcon />}>
                Usuários
              </Nav.Item>
              <Nav.Item as={Link} href="/" eventKey="4" icon={<GroupIcon />}>
                Clientes
              </Nav.Item>
              <Nav.Item as={Link} href="/" eventKey="5" icon={<GroupIcon />}>
                Serviços
              </Nav.Item>
              <Nav.Item as={Link} href="/" eventKey="6" icon={<GroupIcon />}>
                Veiculos
              </Nav.Item>
              <Nav.Menu
                eventKey="3"
                trigger="hover"
                title="Advanced"
                icon={<MagicIcon className={styles['nav-menu-icon']} />}
                placement="rightStart"
              >
                <Nav.Item as={Link} href="/" eventKey="3-1">
                  Geo
                </Nav.Item>
                <Nav.Item as={Link} href="/" eventKey="3-2">
                  Devices
                </Nav.Item>
                <Nav.Item as={Link} href="/" eventKey="3-3">
                  Brand
                </Nav.Item>
                <Nav.Item as={Link} href="/" eventKey="3-4">
                  Loyalty
                </Nav.Item>
                <Nav.Item as={Link} href="/" eventKey="3-5">
                  Visit Depth
                </Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        <Themes />
      </Sidebar>

      <Container className={containerClasses}>
        <Header />
        <Content className={styles.content}>{children}</Content>
      </Container>
    </Container>
  )
}

export default Frame
