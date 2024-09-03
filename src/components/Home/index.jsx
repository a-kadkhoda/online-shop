


const Home = ({setNavigate})=>{

    const handleClick =(navigate)=>{
        setNavigate(navigate)
    }


    return(
        <>
        
        <section className="container flex justify-center items-center min-h-[93.9vh] font-iranSansX-R">
            <div className="flex flex-col gap-y-10">
                <h1 className="text-3xl text-slate-800 font-iranSansx-B">
                    به شاپتیفای خوش آمدید
                </h1>
                <div className="flex justify-around">
                    <a className="w-32 h-10 bg-slate-800 text-white flex items-center justify-center rounded-lg hover:bg-slate-600" onClick={()=>handleClick("Products")} href="#">شروع خرید</a>
                    <a className="w-32 h-10 bg-white text-slate-800 border border-slate-800 flex items-center justify-center rounded-lg hover:bg-slate-100" onClick={()=>handleClick("About")} href="#">درباره ما</a>
                </div>
            </div>
        </section>

        
        </>
    )
}




export default Home