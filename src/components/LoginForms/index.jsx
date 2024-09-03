import { useState } from "react";
import "./index.css";
import { useRef } from "react";

const LoginForms = ({setIsLogin,setNavigate}) => {
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState("");
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [validateCorrect, setValidateCorrect] = useState(false);
  const [generateCode, setGenerateCode] = useState();
  const inputRef = useRef();
  const pattern = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsPhoneNumber(!pattern.test(value));
  };
  const randomNumber = () => {
    const code = Math.floor(Math.random() * 900000).toString();
    console.log(code);
    setGenerateCode(code);
  };
  const handleValidate = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;

    if (pattern.test(value)) {
      randomNumber();
      setValidateCorrect(true);
    }
  };
  const editNumber = () => {
    setValidateCorrect(false);
    setInputValue("");
  };
  const validation = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const confrimValidate = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === generateCode) {
     setIsLogin(true);
     setNavigate("Products")
    } else setIsLogin(false);
  };

  return (
    <>
      <form action="" className="form-login">
        <div className="form-header">
          {validateCorrect ? <span>confrim code</span> : <span>log In</span>}
        </div>
        <div className="form-body">
          {validateCorrect ? (
            <span>the code will send to the {inputValue}</span>
          ) : (
            <span>
              To receive consultation, please enter your mobile number in the
              relevant form .
            </span>
          )}

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your number "
            value={validateCorrect ? input : inputValue}
            onChange={validateCorrect ? validation : handleChange}
          />
          <div>{isPhoneNumber && <span>invalid phone number</span>}</div>
        </div>
        <div className="form-footer">
          <button onClick={validateCorrect ? confrimValidate : handleValidate}>
            {validateCorrect ? "confirm" : "get verified code"}
          </button>
          {validateCorrect && (
            <button className="edit-number" onClick={editNumber}>
              edit number
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginForms;
