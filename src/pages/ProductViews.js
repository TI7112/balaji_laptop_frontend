import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiurl from '../config/config.js'

const ProductViews = () => {
    const modelno = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`${apiurl}/products/${modelno.id}`).then(data => {
            return setProduct(data.data)
        })

    }, [])

    return (
        <Layout>
        {product ? 
            <div className="flex gap-16 px-96">
                <div className="w-1/2 flex flex-col justify-center gap-10 items-center">
                    <img src={require(`../assets/img/${product.product_img}`)} className="w-96" alt="" />
                    <div className="flex items-center gap-2">
                        <div className="border-2 group">
                            <img className='w-32 group-hover:brightness-90' src={require(`../assets/img/Laptop.jpg`)} alt="" />
                        </div>
                        <div className="border-2 group">
                            <img className='w-32 group-hover:brightness-90' src={require(`../assets/img/${product.product_img}`)} alt="" />
                        </div>
                        <div className="border-2 group">
                            <img onClick={(e)=>{console.log(e.target.src)}} className='w-32 group-hover:brightness-90' src={require(`../assets/img/Laptop.jpg`)} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 py-16">
                    <p className='text-3xl font-semibold'>{product.product_title}</p>
                    <p className='text-lg text-slate-600 font-semibold py-4'>{product.product_desc}</p>
                    <div className="flex items-center gap-3">
                        <p className='text-3xl py-2 font-semibold'>Rs. {product.product_discount_price}</p>
                        <del className='text-slate-600 font-semibold text-lg'>Rs.{product.product_price}</del>

                    </div>
                    <div className="flex pt-8 items-center gap-5">
                        <p className='bg-green-600 text-white px-12 py-1 font-semibold hover:bg-green-700'>Whatsapp</p>
                        <p className='bg-blue-600 text-white px-12 py-1 font-semibold hover:bg-blue-700'>Call Now</p>
                    </div>
                </div>
            </div> : "" }
        </Layout>
    )
}

export default ProductViews