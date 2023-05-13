import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Portal from "./Portal/Portal"
function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
            <Portal/>
        </>
    )
}

export default Layout