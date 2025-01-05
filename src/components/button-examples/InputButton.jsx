// InputButton.jsx

import PropTypes from 'prop-types';

/**
 * A simple button component using input element.
 * @param {prop.value} buttonText - The text to display on the button 
 * @returns 
 */
const InputButton = ({ value = 'Input button' }) => {
    return (
        <input
            type="button"
            value={value}
            onClick={() => alert('Input button clicked')}
        ></input>
    );
}

InputButton.propTypes = {
    value: PropTypes.string,
};


export default InputButton;