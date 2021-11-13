import './App.scss';
import { useState, useEffect } from 'react';
import Desktop from './Pages/Desktop';
import Mobile from './Pages/Mobile';

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <div className="App">
      {(screenWidth > 1000) && (<Desktop />)}
      {(screenWidth < 1000) && (<Mobile />)}
    </div>
  );
}

export default App;
