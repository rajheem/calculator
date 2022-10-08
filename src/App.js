import './App.css';
import React, {useState} from "react";

function App() {
    const[number,setNumber]=useState("0")
    const[result,setResult]=useState(0)
    const[old,setOld]=useState("")

    function calculate(str){

        console.log(number[number.length-1])
        if(number=="0"){
            setNumber("")
        }
        console.log("Old is "+ old)
        if(str=="+"||str=="-"||str=="/"||str=="*"){
            setOld("")
        }
        if (old=="."){
            if(str=="."){
                str=""
            }
        }
        console.log(("Old Number is"+ number))
        setNumber((prev)=>prev+str);
        console.log("New Number is"+ number)
        if(str==".") {
            setOld(str)
        }
        if(number[number.length-1]=="="){
            if(str=="0"||str=="1"||str=="2"||str=="3"||str=="4"||str=="5"||str=="6"
                ||str=="7"||str=="8"||str=="9"){
                setNumber(str)
            }else{
                setNumber(result+str)
            }
        }
    }

    function answer(){
        let str=number

        console.log("Answer is " + str)
        let newans=str.replace(/\b(?:0*(0\.\d+)|0+)/g, '$1')
        console.log("New Answer is "+ newans)
        setResult(eval(newans));
        setNumber((prev)=>prev+"=")
    }

    function clear(){
        setNumber("0")
        setResult(0)
        setOld("")
    }
  return (
    <div className="App container-fluid">
        <div id="grid">

            <div id="display" className="show_answer">{result}</div>
            <div id="display" className="expression">{number}</div>

          <div className="row-cols-5">
        <button type="button" id="nine" className="calc btn btn-secondary" onClick={()=>calculate("9")}>9</button>
        <button type="button" id="eight" className="calc btn btn-secondary" onClick={()=>calculate("8")}>8</button>
        <button type="button" id="seven" className="calc btn btn-secondary" onClick={()=>calculate("7")}>7</button>
                <button type="button" id="divide" className="calc btn btn-secondary"  onClick={()=>calculate("/")}>/</button>
        <button type="button" id="six" className="calc btn btn-secondary" onClick={()=>calculate("6")}>6</button>
        <button type="button" id="five" className="calc btn btn-secondary" onClick={()=>calculate("5")}>5</button>
        <button type="button" id="four" className="calc btn btn-secondary" onClick={()=>calculate("4")}>4</button>
                <button type="button" id="multiply" className="calc btn btn-secondary" onClick={()=>calculate("*")}>*</button>
        <button type="button" id="three" className="calc btn btn-secondary" onClick={()=>calculate("3")}>3</button>
        <button type="button" id="two" className="calc btn btn-secondary" onClick={()=>calculate("2")}>2</button>
        <button type="button" id="one" className="calc btn btn-secondary" onClick={()=>calculate("1")}>1</button>
                <button type="button" id="subtract" className="calc btn btn-secondary" onClick={()=>calculate("-")}>-</button>
              <button type="button" id="equals" className="calc btn btn-success" onClick={answer}>=</button>
        <button type="button" id="zero" className="calc btn btn-secondary" onClick={()=>calculate("0")}>0</button>
        <button type="button" id="add" className="calc btn btn-secondary" onClick={()=>calculate("+")}>+</button>
        <button type="button" id="decimal" className="calc btn btn-secondary" onClick={()=>calculate(".")}>.</button>

              </div>
        <button type="button" id="clear" className="col-md-6 calc btn btn-warning" onClick={clear}>AC</button>

        </div>

    </div>
  );
}

export default App;
