'use client'
import { useEffect, useState } from 'react'
import { themes } from '@/data'
import ThemeItem from './ThemeItem'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import styles from './styles.module.css'
import { Theme } from '@/interfaces/Iuser'

const getStorageColor = (): string => {
  if (typeof window !== 'undefined' && localStorage.getItem('color')) {
    return localStorage.getItem('color') as string
  }
  return 'hsl(252, 35%, 51%)'
}

const getStorageTheme = (): string => {
  if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as string
  }
  return 'light-theme'
}

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState<boolean>(false)
  const [color, setColor] = useState<string>(getStorageColor())
  const [theme, setTheme] = useState<string>(getStorageTheme())

  const changeColor = (color: string) => {
    setColor(color)
  }

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color)
    localStorage.setItem('color', color)
  }, [color])

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const [selectedColor, setSelectedColor] = useState(getStorageColor()) // cor inicial padrão

  const changeColorTest = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value)
    setColor(event.target.value)
    console.log(selectedColor)
  }

  return (
    <div>
      <div
        className={`${showSwitcher ? styles['show-switcher'] : ''} ${styles['style__switcher']}`}
      >
        <div
          className={styles['style__switcher-toggler']}
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className={styles['theme__toggler']} onClick={toggleTheme}>
          {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className={styles['style__switcher-title']}>Mudar Tema</h3>

        <div className={styles['style__switcher-items']}>
          {themes.map((theme: Theme) => (
            <ThemeItem key={theme.id} {...theme} changeColor={changeColor} />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: '5px',
            padding: '10px 5px',
          }}
        >
          <div>
            <h3
              style={{
                display: 'flex',
                color: 'hsl(0, 0%, 40%)',
                fontSize: 'var(--small-font-size)',
                fontWeight: 'var(--weight-600)',
              }}
            >
              Personalize
            </h3>
          </div>
          <input
            type="color"
            value={selectedColor}
            onChange={changeColorTest}
            className={styles['color-picker']}
          />
        </div>

        <div
          className={styles['style__switcher-close']}
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  )
}

export default Themes
