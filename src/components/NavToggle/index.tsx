'use client'
import { Navbar, Nav } from 'rsuite'
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine'
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine'
import styles from './styles.module.css'

interface NavToggleProps {
  expand?: boolean
  onChange?: () => void
}

const NavToggle = ({ expand, onChange }: NavToggleProps) => {
  return (
    <Navbar appearance="subtle" className={`${styles['style-nav']} nav-toggle`}>
      <Nav pullRight>
        <Nav.Item
          onClick={onChange}
          // style={{ textAlign: 'center', color: 'var(--body-color)' }}
          className={styles['nav-icon-custom']}
          icon={expand ? <ArrowLeftLineIcon /> : <ArrowRightLineIcon />}
        />
      </Nav>
    </Navbar>
  )
}

export default NavToggle
