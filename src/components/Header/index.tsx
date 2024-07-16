'use client'
import styles from './styles.module.css'
import { Nav, Stack, Avatar } from 'rsuite'

const Header = () => {
  return (
    <Stack className={styles.header} spacing={8} justifyContent="space-between">
      <Nav>
        <span>Header - Nav bar</span>
      </Nav>

      <Stack spacing={6}>
        <div>JOAO VITOR</div>
        <Avatar
          size="sm"
          circle
          src="https://avatars.githubusercontent.com/u/119818503?s=96&v=4"
          alt="@simonguo"
          style={{ marginLeft: 8 }}
        />
      </Stack>
    </Stack>
  )
}

export default Header
