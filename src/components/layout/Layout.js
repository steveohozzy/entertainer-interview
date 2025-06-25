import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {  useSelector } from 'react-redux';
import {
  selectCartCount,
  selectCartTotal,
} from '../../store/cart/cartSelector';

import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const Layout = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const cartCount = useSelector(selectCartCount);
    const cartTotal = useSelector(selectCartTotal);
    const navigate = useNavigate();

    const goToCartHandler = () => {
        navigate('/cart');
    };

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
                            <a href="/account" className="hidden transition-all hover:text-brandLightBlue md:flex items-center ml-3 text-sm group">
                                <span className="mr-1 transition-all transition-duration-500 group-hover:rotate-[20deg]">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.37 2.37C3.95 0.79 5.86 0 8.11 0C10.36 0 12.27 0.79 13.85 2.37C15.43 3.95 16.22 5.86 16.22 8.11C16.22 10.36 15.43 12.27 13.85 13.85C12.27 15.43 10.36 16.22 8.11 16.22C5.86 16.22 3.95 15.43 2.37 13.85C0.79 12.27 0 10.36 0 8.11C0 5.86 0.79 3.95 2.37 2.37ZM8.11 14.38C10.05 14.38 11.64 13.64 12.88 12.16C12.57 11.57 12.14 11.1 11.57 10.74C11 10.38 10.37 10.2 9.67 10.2C9.61 10.2 9.53 10.21 9.44 10.23C8.98 10.38 8.54 10.46 8.1 10.46C7.66 10.46 7.22 10.38 6.76 10.23C6.67 10.21 6.6 10.2 6.53 10.2C5.83 10.2 5.2 10.38 4.63 10.74C4.06 11.1 3.63 11.57 3.32 12.16C4.56 13.64 6.15 14.38 8.09 14.38H8.11ZM10.14 3.99C9.57 3.42 8.9 3.14 8.11 3.14C7.32 3.14 6.65 3.42 6.08 3.99C5.51 4.56 5.23 5.23 5.23 6.02C5.23 6.81 5.51 7.48 6.08 8.05C6.65 8.62 7.32 8.9 8.11 8.9C8.9 8.9 9.57 8.62 10.14 8.05C10.71 7.48 10.99 6.81 10.99 6.02C10.99 5.23 10.71 4.56 10.14 3.99Z" />
                                    </svg>
                                </span>
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
                            <button onClick={goToCartHandler} name="View cart" className="flex items-center text-white group">
                                <span className="transition-all group-hover:rotate-[25deg]">
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                                    </svg>
                                </span>

                                <div className="ml-1 text-xs bg-brandRed w-[24px] h-[24px] flex items-center justify-center rounded-full">{cartCount}</div>
                                <span className="sr-only">View your cart</span>
                                <span className="text-sm ml-2 hidden md:block">£{cartTotal.toFixed(2)}</span>
                            </button>
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