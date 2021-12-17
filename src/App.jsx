import { UserProvider } from "./context/UserCtx";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import css from './App.css'

export default function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Home />
        </Layout>
      </UserProvider>
    </>
  )
}
