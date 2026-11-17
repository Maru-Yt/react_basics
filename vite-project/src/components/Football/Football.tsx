import styles from './Football.module.css'

type Props = {
  title: string
  text: string
  paragraph: string
  color: string
  image: string
}

export default function Football({ title, text, paragraph, color, image }: Props) {
  return (
    <div className={styles.football} style={{ backgroundColor: color }}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} alt="Hero" className={styles['football-img']} />
      <p>{paragraph}</p>
    </div>
  )
}
