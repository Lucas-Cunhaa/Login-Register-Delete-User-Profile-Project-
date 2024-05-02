import PropTypes from 'prop-types';

const Button = ( { className, children }) => {
    return (
        <button className={className} id="button" type="submit" value="Submit">{children}</button>
    )
}

Button.propTypes = {
    className: PropTypes.string ,
    children: PropTypes.string ,

};

export default Button

