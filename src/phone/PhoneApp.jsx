 /* When referencing a folder outside of this folder make sure to use '../'  */
   
import Calculator from '../Components/cardCounter'
import logo from '../logo.svg';
import '../App.css';
export default function PhoneApp() {
  return (
    <div className="App">
       <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
         
        
        {/*  This section will display all the buttons*/}
        <div>
        {/* buttons container */}

         <Calculator/>
        
      </div>
      
      </header>
    </div>
  );
}