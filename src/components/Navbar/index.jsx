import react from "../../assets/react.svg";

const Navbar = ({setNavigate,isLogin}) => {


  const handleClick = (navigate)=>{
    setNavigate(navigate)
  }


  return (
    <>
      <header className="font-iranSansX-R">
        <div className="flex justify-between items-center h-14 w-[90%] mx-auto bg-slate-800 text-white px-5 rounded-xl">
          <div className="flex justify-between gap-x-4 md:gap-x-10">
            <div className="shrink-0">
              <img className="animate-spin-slow" src={react} alt="react" />
            </div>
            <nav>
              <ul className="flex justify-between gap-x-4 md:gap-x-10 child-hover:text-rose-300 ">
                <li onClick={()=>handleClick("Home")} >
                  <a href="#">خانه</a>
                </li>
                <li onClick={()=>handleClick("Products")}>
                  <a href="#">محصولات</a>
                </li>
                <li onClick={()=>handleClick("About")}>
                  <a href="#">درباره ما</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-row-reverse justify-between items-center gap-10">
            {isLogin && <span>Aliakbar Kadkhoda</span>}
            {!isLogin && <div className="w-36 h-8 flex justify-center items-center rounded-lg bg-sky-800 hover:bg-sky-600 cursor-pointer ">
              <a href="#" onClick={()=>handleClick("Login")}>ثبت نام | ورود</a>
            </div>}
            {isLogin && <div className="w-36 h-8 flex justify-center items-center rounded-lg bg-sky-800 hover:bg-sky-600 cursor-pointer ">
              <a href="#" onClick={()=>handleClick("Cart")}>سبد خرید</a>
            </div>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
