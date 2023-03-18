import React from 'react'
import { Layout } from '../components/Components'
import { Link } from 'react-router-dom'
import support from '../assets/img/For enquery.svg'
import tfsupport from '../assets/img/For Support.svg'
import {IoLocationSharp} from 'react-icons/io5'

const Contact = () => {
    return (
        <Layout>
            <div className="flex gap-16 justify-center border-t-4 border-slate-200 py-12">
                <div className="bg-slate-100 w-1/5 border-2 hover:bg-sky-100 border-slate-200 px-10 py-4 rounded">
                    <div className="">
                        <div className="flex gap-5 items-center">
                            <img src={support} className="h-12" alt="logo" />
                            <div className="">
                                <h4 className={`text-slate-700 `}>For Support</h4>
                                <Link to={'tel:+919304599132'}><h2 className={`-pt-1 text-slate-700 font-bold text-2xl`}>+91 9304599132</h2></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-slate-100 hover:bg-sky-100 w-1/5 border-2 border-slate-200 px-10 py-4 rounded`}>
                    <div className="">
                        <div className="flex gap-5 items-center">
                            <img src={tfsupport} className="h-12" alt="logo" />
                            <div className="">
                                <h4 className={`text-slate-700 `}>Enquiry</h4>
                                <Link to={'tel:06454349082'}><h2 className={`-pt-1 text-slate-700 font-bold text-2xl`}>06454359082</h2></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-96 flex justify-center">
                <div className="w-[44vw]">
                    <div className={`bg-slate-100 w-full border-2 border-slate-200 px-10 py-4 rounded`}>
                        <div className="">
                            <div className="flex flex-col items-center ">
                                <IoLocationSharp className='w-8 h-12' />
                                <h4 className={`text-slate-700 font-semibold`}>Zila School Road Bhatta Bazar</h4>
                                <h4 className={`text-slate-700 font-semibold`}> Purnia 854301 Bihar</h4>
                                <Link to={'mailto:Help@balajilaptops.com'}><h2 className={`-pt-1 hover:text-sky-600 text-slate-700 font-bold text-xl`}>Help@balajilaptops.com</h2></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact



