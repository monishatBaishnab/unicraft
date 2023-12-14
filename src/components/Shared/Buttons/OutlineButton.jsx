import PropTypes from 'prop-types';

const OutlineButton = ({ padding, display, children, handleClick = () => {} }) => {

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
        hover:bg-primary
        hover:text-white 
        focus:bg-primary 
        focus:text-white 
        active:bg-primary 
        active:text-white
        `}>
            {children}
        </button>
    );
};

OutlineButton.propTypes = {
    padding: PropTypes.string,
    display: PropTypes.string,
    children: PropTypes.node,
    handleClick: PropTypes.func,
}

export default OutlineButton;