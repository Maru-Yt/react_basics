

import styles from './App.module.css'
import Card from './components/Card'
import Football from './football'
import Basketball from './Basketball'

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
      <div className="football-container">
        <Football />
        <Football />
        <Football />
        <Football />
        <Football />
        <Football />
      </div>
      <div className="basketball-container">
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
