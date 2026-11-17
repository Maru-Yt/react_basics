import styles from './Football.module.css'

type Props = {}

export default function Football({ }: Props) {
  return (
    <div className={styles.football}>
      <h2>Football!</h2>
      <h2>test</h2>
      <img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="Hero" className={styles['football-img']} />
      <p>made by Marwan</p>
    </div>
  )
}
