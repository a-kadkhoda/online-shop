const CardProduct = ({title,price,image,setNavigate,isLogin,myCart,setMyCart}) => {

  const handleClick= (navigate)=>{
    setNavigate(navigate)
  }

  const addToCart = ()=>{

    const item =  {
      title,
      price,
      image
    }

    setMyCart([...myCart, item])
    alert(`${title} added to your cart`)
  }


  return (
    <>
      <div className="w-60 border-2 border-slate-800 bg-white p-4 rounded-lg font-iranSansX-R flex flex-col shadow ">
        <div className="rounded-lg h-56 content-center overflow-hidden" >
          <img src={image} className="w-full h-full" alt={title} />
        </div>
        <span dir="ltr" className="text-center my-5 line-clamp-1">{title}</span>
        <div className="flex items-center justify-between px-4">
          <span>${price}</span>
          <button onClick={isLogin?addToCart:()=>handleClick("Login")} className="bg-slate-800 hover:bg-slate-600 w-16 text-sm text-white h-8 rounded-md shadow-md">Buy</button>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
