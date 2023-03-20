import React, {useState , useEffect} from 'react'
import { Layout } from '../components/Components'
import axios from 'axios';
import apiurl from '../config/config'
import { useParams } from 'react-router-dom';

const Categories = () => {

    const [product, setProduct] = useState();
    const [productTitle, setProductTitle] = useState(useParams().id)
    const [brands, setBrand] = useState();
    const slug = useParams()


    useEffect(() => {
        axios.get(`${apiurl}/categories/${slug.id}`).then(data => {
            setProduct(data.data)
        })

        axios.get(`${apiurl}/brands`).then(data => {
            setBrand(data.data)
        })

    }, [])


    const handleProductsbrand = (e) => {
        const { value } = e.target
        axios.get(`${apiurl}/brands/${value}/${slug.id}`).then(data => {
            setProduct(data.data)
        })
    }

    const wordWrap = (str, no_of_words) => {
        return str.split(" ").splice(0, no_of_words).join(" ") + "...";
    }

    const NewLaptopsCategoryView = ({ title, desc, imgurl, redirecturl }) => (
        <div className={`bg-white hover:border-green-500 hover:scale-105 border duration-300 hover:shadow-xl px-5 py-3 rounded-xl`}>
            <a href={redirecturl} className="">
                <div className="">
                    <div className="flex justify-center">
                        <img src={imgurl} className="h-40" alt="logo" />
                    </div>
                    <h2 title={title} className={`py-3 text-slate-700 font-bold text-xl`}>{wordWrap(title, 4)}</h2>
                    <h4 title={desc} className={` text-slate-700 font-semibold text-xs`}>{wordWrap(desc, 24)}</h4>
                    <div className="flex gap-2 text-xl pt-4  items-end font-semibold text-green-500">Rs. 46000 <del className='text-base text-slate-400 '>96000</del></div>
                    <p className='flex justify-center'><button className='px-10 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded mt-4'>Checkout</button></p>
                </div>
            </a>
        </div>
    )

    return (
        <Layout>
            <div className="px-96 pt-6">
                <div className="flex items-center w-full justify-between border-b-2">
                    <div className="">
                        <h3 className='text-4xl font-bold text-slate-800 pb-2 capitalize'>{productTitle}</h3>
                        <div className="h-[5px] bg-slate-800 w-28"></div>
                    </div>
                    <select defaultValue={""} onChange={handleProductsbrand} className='text-xl border-2 border-slate-600 p-2 rounded capitalize' name="" id="">
                        <option value="" disabled selected>Brand</option>
                        {brands ? brands.map((curElem, index) => (
                            <option key={index} className="capitalize" value={`${curElem.product_brand}`}>{curElem.product_brand}</option>

                        )) : ""}
                    </select>
                </div>
                <div className="grid grid-cols-3 py-10 gap-16">
                    {product ? product.map((curElem, index) => (
                        <NewLaptopsCategoryView key={index} title={curElem.product_title} desc={curElem.product_desc} imgurl={require(`../assets/img/${curElem.product_img}`)} redirecturl={`/products/${curElem.product_model}`} />

                    )) : ""}
                </div>
            </div>
        </Layout>
    )
}

export default Categories