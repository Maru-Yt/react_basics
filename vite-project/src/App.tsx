

import styles from './App.module.css'
import Card from './components/Card/Card'
import Football from './components/Football/Football'
import Basketball from './components/Basketball/Basketball'

function App() {


  return (
    <>
      <h1>Welcome اهلا و سهلا</h1>
      <div className={styles.cardcontainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.footballcontainer}>
        <Football />
        <Football />
        <Football />
        <Football />
        <Football />
        <Football />
      </div>
      <div className={styles.basketballcontainer}>
        <Basketball />
        <Basketball />
        <Basketball />
        <Basketball />
        <Basketball />
        <Basketball />
      </div>

    </>
  )
}











export default App
