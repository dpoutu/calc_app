import { set } from 'date-fns';
import '../App.css';
import {useState} from 'react';

/* A functional React component named Calculator */
function Calculator(){

    const [display, setDisplay] = useState("")

    function HandleButtonClick (value) {
    /*A function React gives you to change that value */
    setDisplay(prev => prev + value)
    

    }
    /* A function to calculate the result based on the current display value */
    

    function Calculate() {
      try{

    
          let NewResult = "";
      
    if (display.includes("=")){
        return;
    }
        if (display.includes("+")){
             NewResult = display.split("+").reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
            setDisplay(NewResult);
             
  }  else if (display.includes("-")) {
            NewResult = display.split("-").reduce((a, b) => parseFloat(a) - parseFloat(b));
            setDisplay(NewResult);
        
    } else if (display.includes("x")) {
            NewResult = display.split("x").reduce((a, b) => parseFloat(a) * parseFloat(b), 1);
            setDisplay(NewResult);
    } else if (display.includes("÷")) {
            NewResult = display.split("÷").reduce((a, b) => parseFloat(a) / parseFloat(b));
            setDisplay(NewResult);
    }else {
             setDisplay(" ");
                
   
            
        }
    }
     catch (error) { 
        setDisplay("Error")
    } finally {
        // Any cleanup if necessary 
    }
    }

    /* A function to handle cancel button */
    function OperatorsAndCancel() {
        setDisplay("")
    }


    return (
        
     <>
     <div className='displayContainer'>
     <h1 className='display'>{display}</h1>
     </div>
            <section className="buttonSection">
             
            <div className='btncont'>
                <button className='btn' onClick={() => HandleButtonClick("7")}>7</button>
                <button className='btn' onClick={() => HandleButtonClick("8")}>8</button>
                <button className='btn' onClick={() => HandleButtonClick("9")}>9</button>
                <button className='btn' onClick={() => HandleButtonClick("÷")}>÷</button>
            </div>
            <div className='btncont'>
                <button className='btn' onClick={() => HandleButtonClick("4")}>4</button>
                <button className='btn' onClick={() => HandleButtonClick("5")}>5</button>
                <button className='btn' onClick={() => HandleButtonClick("6")}>6</button>
                <button className='btn' onClick={() => HandleButtonClick("x")}>x</button>

            </div>
            <div className='btncont'>
                <button className='btn' onClick={() => HandleButtonClick("1")}>1</button>
                <button className='btn' onClick={() => HandleButtonClick("2")}>2</button>
                <button className='btn' onClick={() => HandleButtonClick("3")}>3</button>
                <button className='btn' onClick={() => HandleButtonClick("+")}>+</button>           
                </div>
            <div className='btncont'>
                <button className='btn' onClick={() => HandleButtonClick("0")}>0</button> 
                <button className='btn' onClick={() => Calculate(display)}> = </button>
                <button className='btn' onClick={() => HandleButtonClick("-")}>-</button>
               
            </div>
            <div>
                 <button className="cancelButton" onClick={OperatorsAndCancel}>Cancel</button>
            </div> 
        </section></>
      


    );

}
/* Exporting the Calculator component as the default export of this module */
 

export default Calculator;
    
