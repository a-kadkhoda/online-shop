
import { useEffect, useRef, useState } from "react"
import TabProduct from "../TabProduct"
import CardProduct from "../CardProduct"




const Products =({setIsLoading ,setNavigate,isLogin,setMyCart,myCart})=>{

    const[category,setCategory]=useState("all")
    const[products,setProducts]=useState([])
    const[input,setInput]=useState("")
    const[filteredItems,setFilteredItems]=useState([])
    const inputRef = useRef(null)

    /* fetch data from server */
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal
        if(category === "all") getAllProducts(signal)
        if(category !== "all") getProductsByCategory(signal,category)

        return()=>{
            controller.abort()
        }
    },[category])
    /* fetch all products */
    const getAllProducts = async(signal)=>{
        try {
            setIsLoading(true)
            const res = await fetch('https://fakestoreapi.com/products',{signal})
            if(!res.ok) throw new Error("Failed to fetch products")
            const data = await res.json()
            setProducts(data)
            setIsLoading(false)
        } catch (error) {
            console.log(`response : ${error.message}`);
        }
    }
    /* fetch products by category */
    const getProductsByCategory = async(signal,category)=>{
        try {
            setIsLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/category/${category}`,{signal})
            if(!res.ok) throw new Error("Failed to fetch products")
            const data = await res.json()
            setProducts(data)
            setIsLoading(false)
        } catch (error) {
            console.log(`response : ${error.message}`);
        }
    }
    /* controll input */
    const handleChange = (e)=>{
        const{value} = e.target
        setInput(value)
    }
    /* filter products by input value */
    useEffect(() => {
        const filtered = products.filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())
        );
        if(filtered.length === 0){
            setFilteredItems(products)
        }else{
            setFilteredItems(filtered)
            
        }
    }, [input, products]);

    return(
        <>
        
        <section className="container">
            <div className="flex justify-center gap-x-10">
                <div className="self-start">
                    <TabProduct setCategory={setCategory}/>
                </div>
               <div className=" bg-slate-500 p-12 rounded-lg border-4 border-slate-800">
                <form className="relative">
                    <input type="text" className="w-full mb-5 pr-5 p-2 rounded-sm border border-slate-800 outline-none placeholder:text-slate-600" placeholder="جستجو محصول ..."  onChange={handleChange} value={input} ref={inputRef} />
                </form>
               <div className="grid grid-cols-4 gap-4">
                {

                    (inputRef.current == "")?
                    products.map((item)=>{
                        return <CardProduct setMyCart={setMyCart} myCart={myCart} setNavigate={setNavigate} key={item.id} isLogin={isLogin} {...item}/>
                    }):
                    filteredItems.map((item)=>{
                        return <CardProduct setMyCart={setMyCart} myCart={myCart} setNavigate={setNavigate} key={item.id} isLogin={isLogin} {...item}/>
                    })
                }
                    
                </div>
               </div>

            </div>
        </section>
        
        
        </>
    )
}



export default Products