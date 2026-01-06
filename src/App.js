import PhoneApp from './phone/PhoneApp';
import IphoneMockup from './Components/IphoneMockup';

import './phone/phonelayout.css';
function App() {
  return (
// the main app component
    <div className="App">
      <IphoneMockup>
        <PhoneApp/>
      </IphoneMockup>
     </div>
  );
}

export default App;
