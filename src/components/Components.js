import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import logo from '../assets/img/logo.svg'
import support from "../assets/img/24x7 Support.svg"
import delivery from "../assets/img/Free Deliver Icon .svg"
import product from "../assets/img/Geniuen Product Icon.svg"

export const Header = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center px-96 bg-slate-200 py-4">
          <div className="flex gap-4 text-slate-600 font-semibold">
            <Link to={'tel:+919304599132'}><p className='text-sm cursor-pointer'>+91 9304599132</p></Link>
            <p className='text-sm'>|</p>
            <Link to={'tel:06454349082'}><p className='text-sm cursor-pointer'>06454-359082</p></Link>
          </div>
          <div className="flex gap-4 text-slate-600 font-semibold">
            <Link to={'/profile'}><p className='text-sm flex items-center gap-1 cursor-pointer'><FaRegUser /> My Account</p></Link>
            <p className='text-sm'>|</p>
            <Link to={'/login'}><p className='text-sm cursor-pointer'>Login / Sign-up</p></Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center px-96 py-4">
          <div className="flex gap-4 text-slate-600 font-semibold">
            <img src={logo} alt="" className='w-52' />
          </div>
          <div className="flex gap-6 text-lg text-slate-500 font-semibold">
            <Link to={'/'}><p className='hover:text-slate-800 hover:border-b-2 py-2 border-b border-white hover:border-red-500'>Home</p></Link>
            <Link to={'/products'}><p className='hover:text-slate-800 hover:border-b-2 py-2 border-b border-white hover:border-red-500'>Products</p></Link>
            <Link to={'/service'}><p className='hover:text-slate-800 hover:border-b-2 py-2 border-b border-white hover:border-red-500'>Service</p></Link>
            <Link to={'/contact'}><p className='hover:text-slate-800 hover:border-b-2 py-2 border-b border-white hover:border-red-500'>Contact</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const Footer = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center py-10 gap-10 ">
          <div className="">
            <div className="flex items-center">
              <img src={support} className="w-40" alt="logo" />
              <div className="text-xl pl-10">|</div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <img src={delivery} className="w-40" alt="logo" />
              <div className="text-xl pl-10">|</div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <img src={require("../assets/img/payment.jpg")} className="w-40 pt-2" alt="logo" />
              <div className="text-xl pl-10">|</div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <img src={product} className="w-40" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex px-96 w-full py-16 text-white font-semibold">
        <div className="flex flex-col gap-2 w-1/3">
          <a href="/#" className='text-xl'>Warranty Policy</a>
          <a href="/#" className='text-xl'>Terms & Conditions</a>
          <a href="/#" className='text-xl'>Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <Link to={'tel:+919304599132'}><p className='text-xl'>+91 9304599132</p></Link>
          <Link to={'mailto:help@balajilaptops.com'}><p className='text-xl'>Help@balajilaptops.com</p></Link>
          <p className='text-xl'>Zila School Road Bhatta Bazar Purnia 854301 Bihar</p>
        </div>
        <div className="w-1/3">
          <iframe title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.9881674683975!2d87.48462427014464!3d25.77075896453216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b53bef0d8594e2d!2sBalaji%20Laptop%20Service!5e0!3m2!1sen!2sin!4v1663228376548!5m2!1sen!2sin"
            height="170" allowFullScreen=""
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="flex justify-center py-3">
        <p className="text-center text-lg font-semibold">Copyright © All rights reserved.</p>
    </div>
    </>
  )
}



export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header><Header /></header>
      <div className="">{children}</div>
      <footer><Footer /></footer>
    </div>
  )
}