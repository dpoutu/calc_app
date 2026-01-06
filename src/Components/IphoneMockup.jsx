import Time from "./Time";
function IphoneMockup({ children }) {
  return (
    <div className="phone-wrapper">
      <div className="phone-frame">
        {/* Notch / Island*/}
        <div className="phone-notch">
          <div className="camera" />
          <div className="speaker" />
        </div>
       

        {/* Phone screen area */}
        <div className="phone-screen">
           <div className="status-bar">
            
      <span className="time"><Time /></span>
      <div className="status-icons">
      <div className="signal" />
      <div className="battery">
      <div className="battery-fill" />
      </div>
      </div>
      </div>
          {children}
        </div>
        {/* Side buttons*/}
        <div className="side-button power" />
        <div className="side-button volume up" />
        <div className="side-button volume down" />
      </div>
    </div>
  );
}

export default IphoneMockup;