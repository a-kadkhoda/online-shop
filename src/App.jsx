import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/products";
import About from "./components/About";
import Home from "./components/Home";
import Loading from "./components/Loading";
import LoginForms from "./components/LoginForms";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [navigate, setNavigate] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [myCart , setMyCart] = useState([])
  let content;

  /* condition rendering by selected nav tab */
  if (navigate === "Home") {
    content = (
      <>
        <div>
          <Navbar
            setNavigate={setNavigate}
            isLogin={isLogin}
          />
          <main>
            <Home setNavigate={setNavigate} />
          </main>
        </div>
      </>
    );
  } else if (navigate === "Products") {
    content = (
      <>
        <div>
          <Navbar
            setNavigate={setNavigate}
            isLogin={isLogin}
          />
          <main className="mt-14">
            {isLoading && <Loading />}
            <div className={isLoading ? "hidden" : "block"}>
              <Products setMyCart={setMyCart} myCart={myCart} setIsLoading={setIsLoading} setNavigate={setNavigate} isLogin={isLogin}/>
            </div>
          </main>
        </div>
      </>
    );
  } else if (navigate === "About") {
    content = (
      <>
        <div>
          <Navbar
            setNavigate={setNavigate}
            isLogin={isLogin}
          />
          <main>
            <About />
          </main>
        </div>
      </>
    );
  }else if(navigate === "Login"){
    content = (
      <>
      <div>
          <Navbar
            setNavigate={setNavigate}
            isLogin={isLogin}
          />
          <main dir="ltr">
            <LoginForms setIsLogin={setIsLogin} setNavigate={setNavigate} />
          </main>
        </div>
      </>
    )
  }else if(navigate === "Cart"){
    content = (
      <>
      <div>
          <Navbar
            setNavigate={setNavigate}
            isLogin={isLogin}
          />
          <main dir="ltr" className="mt-20">
            <Cart myCart={myCart} setMyCart={setMyCart} setNavigate={setNavigate}/>
          </main>
        </div>
      </>
    )
  }else if(navigate == "Checkout"){
    content = (
      <>
      <div>
          <Navbar
            setNavigate={setNavigate}
            isLogin={isLogin}
          />
          <main dir="ltr" >
            <Checkout />
          </main>
        </div>
      </>
    )
  }

  return <>{content}</>;
}

export default App;
