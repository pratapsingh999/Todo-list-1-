import React, { useState, useEffect } from 'react'
import LandingPage from './Components/LandingPage';
import QApage from './Components/Q&APage';

const App = () => {
    const [buttonStatus, setButtonStatus] = useState(false);
    const handleListener = (clickEventStatus) => {
        setButtonStatus(clickEventStatus);
    }

    return (
        <div>
            {buttonStatus ? <QApage /> : <LandingPage listner={handleListener} />}
        </div>
    )
}

export default App;
