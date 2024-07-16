import { StaticImageData } from 'next/image'
import styles from '../styles.module.css'

// Ajuste o tipo da imagem para aceitar StaticImageData
interface IThemeItem {
  color: string
  img: StaticImageData
  changeColor: (color: string) => void
}

const ThemeItem = ({ color, img, changeColor }: IThemeItem) => {
  return (
    <>
      <img
        src={img.src} // Ajuste aqui para usar a propriedade src de StaticImageData
        alt="theme"
        className={styles['theme__img']}
        onClick={() => {
          changeColor(color)
        }}
      />
    </>
  )
}

export default ThemeItem
