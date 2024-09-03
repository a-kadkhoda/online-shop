import {useState } from "react"



const TabProduct = ({setCategory})=>{

    const[listCategory]=useState([
        {fa : "همه",en:"all"},
        {fa : "لوازم الکترونیکی",en:"electronics"},
        {fa : "جواهرات",en:"jewelery"},
        {fa : "لباس‌های مردانه",en:"men's clothing"},
        {fa : "لباس‌های زنانه",en:"women's clothing"},   
    ])
    const[selected,setSelected]=useState("all")
    /* send category to App and select list item */
    const handleClick = (category)=>{
        setCategory(category)
        setSelected(category)
    }    



    return(
        <>

            <div className="w-60 border-2 border-slate-800 rounded-lg">
                <ul className="w-full divide-y p-2 child:p-3 child-hover:bg-slate-800 child-hover:text-white child:cursor-pointer child:transition-colors">
                    {
                        listCategory.map((item,index)=>{
                            return(
                                <li key={index} className={selected === item.en ? "bg-slate-800 text-white" : ""} onClick={()=>handleClick(item.en)}>{item.fa}</li>
                            )
                        })
                    }
                </ul>
            </div>
        
        </>
    )
}



export default TabProduct