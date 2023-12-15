import PropTypes from 'prop-types';

const Button = ({ padding, display, children, background, handleClick = () => {}, width }) => {

    return (
        <button
        onClick={() => handleClick()}
        className={`
        ${padding ? padding : 'px-8 py-3'}
        ${display ? display : 'inline-block'}
        border
        border-primary 
        rounded-[8px] 
        transition-[background_,_color] 
        ${background ? background : "hover:bg-primary hover:text-white  focus:bg-primary  focus:text-white  active:bg-primary  active:text-white"}
        ${width !== undefined ? width : ''}
        `}>
            {children}
        </button>
    );
};

Button.propTypes = {
    padding: PropTypes.string,
    display: PropTypes.string,
    children: PropTypes.node,
    handleClick: PropTypes.func,
    background: PropTypes.string,
    width: PropTypes.string,
}

export default Button;