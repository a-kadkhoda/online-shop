import { useEffect, useState } from "react";
import CardCart from "../CardCart";
import OrderSummary from "../OrderSummary";

const Cart = ({ setMyCart, myCart ,setNavigate}) => {

  const [totalPrice,setTotalPrice]= useState(0)

  const sumPrice = ()=>{
    const price = myCart.reduce((prev,current)=>{
      return prev + current.price
    },0)
    setTotalPrice(price)
  }

  useEffect(()=>{
    sumPrice()
    return ()=>{
      setTotalPrice(0)
    }
  },[myCart])

  return (
    <>
      <section className="container font-iranSansX-R">
        <div className="grid grid-cols-[65%_35%] gap-x-10 ">
            {
                (myCart.length > 0) ? <div className="bg-slate-500 p-12 rounded-lg border-4 flex flex-col gap-y-5 border-slate-800 ">
                {
                    myCart.map((item,index)=>{
                         return <CardCart key={index} {...item} setMyCart={setMyCart} myCart={myCart} index={index}/>
                    })
                }
          </div>:<div className="min-h-10"></div>
            }
        <div>

            <OrderSummary totalPrice={totalPrice} setNavigate={setNavigate} myCart={myCart}/>
            
        </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
