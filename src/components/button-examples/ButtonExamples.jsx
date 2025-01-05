// ButtonExamples.jsx

import SimpleButton from './SimpleButton';
import './button-examples.css';
import './buttons.css';

const ButtonExamples = () => {
    const buttonClickedHandler = () => {
        const counter = document.getElementById('buttonCounter');
        counter.innerHTML = `${parseInt(counter.innerHTML || 0) + 1} button clicks`;
    };

    return (
        <div className="button-examples">
            <header style={{ textAlign: 'center' }}>
                <h1>Button Examples</h1>
            </header>
            <main>
                <SimpleButton value="Simple Button" clickHandler={buttonClickedHandler} />
                <div id="buttonCounter" className='counter-output'></div>
            </main>

        </div>
    );
};

export default ButtonExamples;