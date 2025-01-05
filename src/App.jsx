import './App.css';
import { useEffect } from 'react';
import ButtonExamples from './components/button-examples/ButtonExamples'

function App() {
  useEffect(() => {
    const appElement = document.querySelector('.app');
    const setAppHeight = () => {
      appElement.style.height = `${window.innerHeight * 0.8}px`;
    };

    setAppHeight();
    window.addEventListener('resize', setAppHeight);

    return () => {
      window.removeEventListener('resize', setAppHeight);
    };  // JSX
  }, []);

  return (
    <>
      <div className="app">
        <ButtonExamples />
      </div>
    </>
  )
}

export default App
