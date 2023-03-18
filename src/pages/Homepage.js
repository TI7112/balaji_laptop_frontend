import React from 'react'
import { Layout } from '../components/Components'
  import arrow from '../assets/img/aerrow.svg'
import apple from '../assets/img/apple.svg'
import windows from '../assets/img/windows.svg'
import laptop from '../assets/img/laptop.svg'
import desktop from '../assets/img/desktop.svg'

const Homepage = () => {

  const CategoryView = ({ title, subtitle, theme, imgurl, redirecturl }) => (
    <div className={`bg-${theme ? theme + "-100" : "white"} hover:scale-110 duration-300 hover:shadow-xl px-10 py-8 rounded-xl`}>
      <a href={redirecturl} className="">
        <div className="">
          <img src={imgurl} className="h-12" alt="logo" />
          <h2 className={`pt-3 text-${theme}-700 font-bold text-2xl`}>{title}</h2>
          <h4 className={`text-${theme}-700 font-semibold`}>{subtitle}</h4>
          <img src={arrow} className="w-12" alt="logo" />
        </div>
      </a>
    </div>
  )

  const ProduceCategoryView = ({ title, subtitle, theme, imgurl, redirecturl }) => (
    <div className={`hover:border-sky-500 border border-slate-300 w-96 hover:scale-110 duration-300 hover:shadow-xl px-10 py-8 rounded-xl`}>
      <a href={redirecturl} className="">
        <div className="">
          <img src={imgurl} className="scale-150 w-40 h-24 py-2" alt="logo" />
          <h2 className={`pt-3 text-${theme}-700 font-bold text-2xl`}>{title}</h2>
          <h4 className={`text-${theme}-700 font-semibold`}>{subtitle}</h4>
          <img src={arrow} className="w-12" alt="logo" />
        </div>
      </a>
    </div>
  )

  const NewLaptopsCategoryView = ({ title, desc, imgurl, redirecturl }) => (
    <div className={`bg-white hover:border-green-500 border border-slate-300 w-96 hover:scale-110 duration-300 hover:shadow-xl px-5 py-8 rounded-xl`}>
      <a href={redirecturl} className="">
        <div className="">
          <img src={imgurl} className="h-52" alt="logo" />
          <div className="flex gap-2 text-xl font-semibold text-green-500">Rs. 46000 <del className='text-base text-slate-400 '>96000</del></div>
          <h2 className={`pt-3 text-slate-700 font-bold text-xl`}>{title}</h2>
          <h4 className={`text-slate-700 font-semibold text-xs`}>{desc}</h4>
          <p className='flex justify-center'><button className='px-10 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded mt-4'>Buy Now</button></p>
        </div>
      </a>
    </div>
  )

  return (
    <Layout>
      <div className="text-red-500">
        <img src={require('../assets/img/Banner1.png')} className='w-full' alt="" />
      </div>
      <div className="px-96 ">
        <div className="py-12">

          <div className="flex gap-5 py-10 justify-center">
            <CategoryView title="Macbook" subtitle="service" imgurl={apple} theme={"yellow"} redirecturl="/service" />
            <CategoryView title="Windows" subtitle="service" imgurl={windows} theme={"pink"} redirecturl="/service" />
            <CategoryView title="Laptop" subtitle="service" imgurl={laptop} theme={"indigo"} redirecturl="/categories/laptop" />
            <CategoryView title="Desktop" subtitle="service" imgurl={desktop} theme={"sky"} redirecturl="/categories/desktop" />
          </div>
        </div>
        <div className="">
          <div className="py-6">
            <h3 className='text-4xl font-bold text-slate-800 pb-2'><span className='text-red-500'>New</span> Products</h3>
            <div className="h-[5px] bg-slate-800 w-28"></div>
          </div>
          <div className="flex gap-5 py-10 justify-center">
            <ProduceCategoryView title="Laptop" subtitle="New" imgurl={require("../assets/img/Laptop.jpg")} redirecturl="/categories/laptop" />
            <ProduceCategoryView title="Computer" subtitle="New" imgurl={require("../assets/img/Computer.jpg")} redirecturl="/categories/desktop" />
            <ProduceCategoryView title="Accessories" subtitle="New" imgurl={require("../assets/img/Accerices.jpg")} redirecturl="/categories/accessories" />
            <ProduceCategoryView title="Printer" subtitle="New" imgurl={require("../assets/img/Printer.jpg")} redirecturl="/categories/printer" />
            <ProduceCategoryView title="Antivirus" subtitle="New" imgurl={require("../assets/img/Antiviruse.jpg")} redirecturl="/categories/antivirus" />
            <ProduceCategoryView title="Printer" subtitle="New" imgurl={require("../assets/img/Laptop.jpg")} redirecturl="/categories/printer" />
          </div>
        </div>
        <div className="">
          <div className="py-6">
            <h3 className='text-4xl font-bold text-slate-800 pb-2'><span className='text-red-500'>Secondhand</span> Products</h3>
            <div className="h-[5px] bg-slate-800 w-28"></div>
          </div>
          <div className="flex gap-5 py-10 justify-center">
            <ProduceCategoryView title="Laptop" subtitle="New" imgurl={require("../assets/img/Laptop.jpg")} redirecturl="/categories/used-laptop" />
            <ProduceCategoryView title="Computer" subtitle="New" imgurl={require("../assets/img/Computer.jpg")} redirecturl="/categories/used-desktop" />
            <ProduceCategoryView title="Accessories" subtitle="New" imgurl={require("../assets/img/Accerices.jpg")} redirecturl="/categories/used-accessories" />
            <ProduceCategoryView title="Printer" subtitle="New" imgurl={require("../assets/img/Printer.jpg")} redirecturl="/categories/used-printer" />
            <ProduceCategoryView title="Antivirus" subtitle="New" imgurl={require("../assets/img/Antiviruse.jpg")} redirecturl="/categories/used-antivirus" />
            <ProduceCategoryView title="Printer" subtitle="New" imgurl={require("../assets/img/Laptop.jpg")} redirecturl="/categories/used-printer" />
          </div>
        </div>
        <div className="">
          <div className="py-6">
            <h3 className='text-4xl font-bold text-slate-800 pb-2'><span className='text-red-500'>New</span> Laptops</h3>
            <div className="h-[5px] bg-slate-800 w-28"></div>
          </div>
          <div className="flex gap-5 py-10 justify-center">
            <NewLaptopsCategoryView title="Laptop" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Computer" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Accessories" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Printer" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
          </div>
        </div>
      </div>
      <div className="">
        <img src={require('../assets/img/banner.png')} className="w-full" alt="" />
      </div>

      <div className="px-96 pt-10">
        <div className="">
          <div className="py-6">
            <h3 className='text-4xl font-bold text-slate-800 pb-2'><span className='text-red-500'>New</span> Desktop</h3>
            <div className="h-[5px] bg-slate-800 w-28"></div>
          </div>
          <div className="flex gap-5 py-10 justify-center">
            <NewLaptopsCategoryView title="Laptop" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Computer" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Accessories" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Printer" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="flex justify-center gap-10">
          <img src={require("../assets/img/Banner-4.png")} className="w-[30vw]" alt="" />
          <img src={require("../assets/img/Banner-6.png")} className="w-[30vw]" alt="" />
        </div>
      </div>
      <div className="px-96 pt-72 pb-16 -mt-60 bg-slate-200">
      <div className="flex gap-5 py-10 justify-center">
            <NewLaptopsCategoryView title="Laptop" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Computer" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Accessories" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
            <NewLaptopsCategoryView title="Printer" desc="New" imgurl={require("../assets/img/Acer-Nitro-5-gaming-laptop.jpg")} redirecturl="/product/product_id" />
          </div>
      </div>
      

      
    </Layout>
  )
}

export default Homepage







// Computer.jpg
// Accerices.jpg
// Antiviruse.jpg
// Printer.jpg