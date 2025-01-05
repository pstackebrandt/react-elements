// SimpleButton.jsx

import PropTypes from 'prop-types';

/**
 * A simple button component created from button element.
 * @param {prop.value} buttonText - The text to display on the button 
 * @returns 
 */
const SimpleButton = ({ value = 'Simple button', clickHandler }) => {

    return (
        <>
            <button
                type='button'
                onClick={clickHandler}
            >{value}</button>
        </>
    );
}

SimpleButton.propTypes = {
    value: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
};


export default SimpleButton;