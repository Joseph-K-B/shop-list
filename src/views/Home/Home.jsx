import { LogControls } from "../../components/controls/LogControls";
import Shopping from "../Shopping/Shopping";
import css from './Home.css'

function Home() {
  return (
    <>
    <main>
      <h1 className={css.title}>Shopping List</h1>
      <Shopping />
    </main>
    </>
  )
}

export default Home;