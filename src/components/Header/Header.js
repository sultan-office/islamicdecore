import { useState } from "react"
import SideCart from "../SideCart/SideCart"
import LogoBar from "./LogoBar"
import Navbar from "./Navbar"
import TopBar from "./TopBar"
import LoginBox from "../LoginBox/LoginBox"
import MobileNav from "./MobileNav/MobileNav"

function Header() {
    const [showCart, setShowCart] = useState(false)
    const [showLoginBox, setShowLoginBox] = useState(false)

    const cartHandler = (value) => {
        setShowCart(value)
    }

    const loginBoxHandler = (value) => {
        setShowLoginBox(value)
    }
    return (
        <>
            <header className="border-b-2 border-gray-400 md:border-0">
                <div>
                    <TopBar />
                    <LogoBar cartHandler={cartHandler} LoginBoxHandler={loginBoxHandler} />
                    <Navbar />
                </div>
                <SideCart showCart={showCart} cartHandler={cartHandler} />
                <LoginBox showLoginBox={showLoginBox} LoginBoxHandler={loginBoxHandler} />
                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <MobileNav cartHandler={cartHandler} LoginBoxHandler={loginBoxHandler} />
                </div>
            </header>
        </>
    )
}

export default Header