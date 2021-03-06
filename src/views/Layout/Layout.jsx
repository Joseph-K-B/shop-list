import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Home from "../Home/Home";

function Layout({ children }){
    return(
        <>
            <Header />
             <main>{children}</main>
            <Footer />      
        </>
    )
}

export default Layout;