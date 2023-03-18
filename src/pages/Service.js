import React from 'react'
import { Layout } from '../components/Components'
import apple from '../assets/img/apple.svg'
import windows from '../assets/img/windows.svg'
import { IoCall } from 'react-icons/io5'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Service = () => {

    return (
        <Layout>
            <div className="flex gap-5 justify-center border-t-4 border-slate-200 py-12">
                <div className={`bg-yellow-100 w-1/5 border-2 border-yellow-300 px-10 py-4 rounded`}>
                    <div className="">
                        <div className="flex gap-5 items-center">
                            <img src={apple} className="h-12" alt="logo" />
                            <div className="">
                                <h2 className={`pt-3 text-yellow-700 font-bold text-2xl`}>Macbook</h2>
                                <h4 className={`text-yellow-700 font-semibold`}>Service</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-pink-100 w-1/5 border-2 border-pink-300  px-10 py-4 rounded`}>
                    <div className="">
                        <div className="flex gap-5 items-center">
                            <img src={windows} className="h-12" alt="logo" />
                            <div className="">
                                <h2 className={`pt-3 text-pink-700 font-bold text-2xl`}>Windows</h2>
                                <h4 className={`text-pink-700 font-semibold`}>Services</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-20 pb-16 pt-8 items-center">
                <h3 className='text-4xl font-bold text-slate-800 pb-2'><span className='text-red-500'>Book</span> Appointment</h3>
                <div className="flex gap-5 items-center">
                <Link to={'tel:+919304599132'}><p className='bg-sky-600 text-white hover:bg-sky-700 font-semibold px-6 py-1 flex items-center gap-1 text-lg'><IoCall className="text-white" />Call</p></Link>
                    <p className='bg-green-600 text-white hover:bg-green-700 font-semibold px-6 py-1 flex items-center gap-1 text-lg'><BsWhatsapp className="text-white" />Whatsapp</p>
                </div>
            </div>
            <div className="grid grid-cols-2 px-96 gap-10 pb-10">
                <div className="">
                    <h4 className='font-bold text-3xl'>Laptop Service</h4>
                    <p className='pt-3 text-slate-800 text-xl'>Laptops are distinct from desktop computers which generally stay in one place in a house or office. Compared to these larger machines, laptops generally use less power but provide less overall performance because they cannot deal with heat as well Laptop Service.</p>
                </div>
                <div className="">
                    <h4 className='font-bold text-3xl'>Desktop Service</h4>
                    <p className='pt-3 text-slate-800 text-xl'>You can usually identify the manufacturer of a laptop by looking for their logo on the outside of the laptop, either on the back of the display, below the display, or on the bottom of the device. The name of the specific model is usually printed on the bottom.</p>
                </div>
                <div className="">
                    <h4 className='font-bold text-3xl'>Motherboard Repair</h4>
                    <p className='pt-3 text-slate-800 text-xl'>A motherboard refers to the main circuit board of any electronic device that incorporates one or more printed control boards. Traditionally, the motherboard facilitates communication between the various components of the device, passing inputs.</p>
                </div>
                <div className="">
                    <h4 className='font-bold text-3xl'>Parts & Accessories</h4>
                    <p className='pt-3 text-slate-800 text-xl'>The CPU is the electrical circuitry responsible for actually processing input. It is capable of performing basic arithmetic and logic operations according to the set of instructions laid out by the program. It commonly works in tandem with RAM.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Service