import styles from './Basketball.module.css'

type Props = {
  title: string
  color: string
  text: string
  paragraph: string
  image: string
}

export default function Basketball({ title, color, text, paragraph, image }: Props) {
  return (
    <div className={styles.basketball} style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <img src={image} alt="Hero" className={styles['basketball-img']} />
      <p>{paragraph}</p>
      <text>{text}</text>

    </div>
  )
}