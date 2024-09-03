

const OrderSummary = ({totalPrice ,setNavigate,myCart}) => {

    const checkOut =()=>{
        if(myCart.length > 0 )setNavigate("Checkout")
        else alert("buy somthing")
    }

  return (
    <>
      <section className="flex flex-col justify-around items-center fixed min-h-[80%] w-[25%] border-4 border-slate-600 rounded-lg ">
        <span className="text-3xl block w-full text-center bg-slate-800 text-white py-4">
          لیست سفارشات
        </span>
        <form dir="rtl" className="flex justify-around w-full">
          <label htmlFor="promo">کد تخفیف:</label>
          <input
            id="promo"
            type="text"
            placeholder="کد را وارد کنید ..."
            className="border w-60 py-1 px-4"
          />
          <button className="bg-slate-500 w-14 rounded-lg text-white hover:bg-slate-600">
            تایید
          </button>
        </form>
        <div dir="rtl" className="flex flex-col gap-y-20 w-full items-center">
          <div className="flex justify-around w-full">
            <span>مجموع قیمت :</span>
            <span>${totalPrice}</span>
          </div>
          <button onClick={checkOut} className="bg-slate-500  w-40 h-10 text-center rounded-lg text-white hover:bg-slate-600">ثبت سفارش</button>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
