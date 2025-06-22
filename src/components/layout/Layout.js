import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const Layout = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll for header visibility
    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setShowHeader(false)
        } else {
        // Scrolling up or at top
        setShowHeader(true)
        }

        setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY]);

    return (
        <>
        <header
            id="site-header"
            className={`text-white rounded-b-2xl md:rounded-b-3xl border-b sticky top-0 w-full z-50 transition-transform duration-300 ${
                showHeader ? "translate-y-0" : "-translate-y-full shadow-none md:shadow-none"
            }`}
        >
            <div className="bg-brandBlue shadow-sm md:shadow-md rounded-b-2xl md:rounded-b-3xl">
                <div className="max-w-7xl mx-auto px-4 pr-0 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Navigation />
                            <a href="/account" className="hidden md:flex items-center ml-3 text-sm">
                                <img
                                    src="/account-icon.svg"
                                    alt="Account"
                                    className="w-[16px] mr-1"
                                />
                                Register/Sign in
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 pt-2 ml-8 md:pt-4 md:ml-0">
                            <a href="/">
                                <img
                                    src="/entertainer-logo.svg"
                                    alt="The Entertainer"
                                    className="w-[117px] md:w-[198px]"
                                />
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* <button name="View your favourites">
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">View your favourites</span>
                            </button> */}
                            <a href="/cart" name="View cart" className="flex items-center">
                                <img src="/cart-icon.svg" alt="cart icon" className="h-[16px] w-[20px]" />
                                <div className="ml-1 text-xs bg-brandRed w-[24px] h-[24px] flex items-center justify-center rounded-full">0</div>
                                <span className="sr-only">View your cart</span>
                                <span className="text-sm ml-2 hidden md:block">£57.77</span>
                            </a>
                            <a href="https://www.elc.co.uk/" rel="noreferrer" target="_blank" className="py-2 rounded-md rounded-tr-[0] md:rounded-br-2xl md:rounded-tr-md md:rounded-br-md px-2 md:px-3 bg-white hover:bg-grey-100 transition-all hover:scale-105 hover:shadow-md">
                                <img src="/elc-logo-full.svg" alt="visit Early Learning Centre website" className="h-7 hidden md:block" />
                                <img src="/elc-logo-small.svg" alt="visit Early Learning Centre website" className="h-7 md:hidden" />
                                <span className="sr-only">visit Early Learning Centre website</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search bg-brandLightBlue pt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form className="relative">
                        <input type="search" placeholder="I'm looking for..." className="h-[40px] px-3 rounded-3xl w-full border border-[3px] border-brandBlue font-bold text-textBlue placeholder:text-textBlue" />
                        <button className="shadow-md group text-white font-bold bg-brandRed rounded-full h-[40px] w-[54px] absolute right-0 top-0 transition-all hover:bg-brandGreen hover:scale-105"><span className="block transition-all group-hover:rotate-[20deg]">Go!</span></button>
                    </form>
                </div>
            </div>
        </header>
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;