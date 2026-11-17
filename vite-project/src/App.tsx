

import styles from './App.module.css'
import Card from './components/Card/Card'
import Football from './components/Football/Football'
import Basketball from './components/Basketball/Basketball'

function App() {


  return (
    <>
      <h1>Welcome اهلا و سهلا</h1>
      <div className={styles.cardcontainer}>
        <Card title="Maru" image="https://picsum.photos/200/300" color="lightgray" />
        <Card title="Ahmed" image="https://picsum.photos/200/300" color="lightblue" />
        <Card title="Youssef" image="https://picsum.photos/200/300" color="lightgreen" />
        <Card title="Mohamed" image="https://picsum.photos/200/300" color="lightyellow" />
        <Card title="Ali" image="https://picsum.photos/200/300" color="lightpink" />
        <Card title="Omar" image="https://picsum.photos/200/300" color="lightpurple" />
      </div>
      <div className={styles.footballcontainer}>
        <Football title="Marwan" color="lightgray" text="Football player" paragraph="Marwan is the best football player in history." image="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" />
        <Football title="Harry" color="lightgreen" text="Football player" paragraph="Harry is a dedicated football player." image="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" />
        <Football title="Timothy" color="lightyellow" text="Football player" paragraph="Timothy is a skilled football player." image="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" />
        <Football title="David" color="lightpink" text="Football player" paragraph="David is a passionate football player." image="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" />
        <Football title="James" color="lightpurple" text="Football player" paragraph="James is a hardworking football player." image="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" />
      </div>
      <div className={styles.basketballcontainer}>
        <Basketball title="Maro" color="lightgray" text="Basketball player" paragraph="Maro is the best basketball player in history." image="https://i.etsystatic.com/41269740/r/il/512a6b/5901702199/il_570xN.5901702199_4k9c.jpg" />
        <Basketball title="Mike" color="lightblue" text="Basketball player" paragraph="Mike is a dedicated basketball player." image="https://i.etsystatic.com/41269740/r/il/512a6b/5901702199/il_570xN.5901702199_4k9c.jpg" />
        <Basketball title="Sarah" color="lightgreen" text="Basketball player" paragraph="Sarah is a skilled basketball player." image="https://i.etsystatic.com/41269740/r/il/512a6b/5901702199/il_570xN.5901702199_4k9c.jpg" />
        <Basketball title="Lisa" color="lightyellow" text="Basketball player" paragraph="Lisa is a passionate basketball player." image="https://i.etsystatic.com/41269740/r/il/512a6b/5901702199/il_570xN.5901702199_4k9c.jpg" />
        <Basketball title="Tom" color="lightpink" text="Basketball player" paragraph="Tom is a hardworking basketball player." image="https://i.etsystatic.com/41269740/r/il/512a6b/5901702199/il_570xN.5901702199_4k9c.jpg" />
      </div>

    </>
  )
}











export default App
