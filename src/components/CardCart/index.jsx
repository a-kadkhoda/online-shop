




const CardCart = ({title,image,price,setMyCart,myCart, index})=>{

    const handleRemove =()=>{
        const itemToRemove = {
            title,image,price
        }
        const newCart = myCart.filter((_,i)=> i !== index )

        setMyCart(newCart)
    }

    return(
        <div className="flex justify-between items-center border-4 border-slate-800 bg-white p-10 rounded-md">
        <div className="flex gap-x-10 ">
          <div className="w-20 rounded-md overflow-hidden ">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-around items-center">
            <span>
              {title}
            </span>
            <span>${price}</span>
          </div>
        </div>
        <div>
          <button className="text-3xl text-red-600" onClick={handleRemove}>X</button>
        </div>
      </div>
    )
}





export default CardCart