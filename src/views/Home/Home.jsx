import { LogControls } from "../../components/controls/LogControls";
import Shopping from "../Shopping/Shopping";
import css from './Home.css'

function Home() {
  return (
    <>
      <h1 className={css.title}>Shopping List</h1>
      <Shopping />
    </>
  )
}

export default Home;