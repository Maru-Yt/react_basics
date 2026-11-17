import styles from './Card.module.css'

type Props = {
  title: string
  text: string
  image: string
  color: string
}

export default function Card({ text, title, image, color }: Props) {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <h2>{title}</h2>
      <img src={image} alt="Hero" />
      <p>{text}</p>






    </div>
  )
}