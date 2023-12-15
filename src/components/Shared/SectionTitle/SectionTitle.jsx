import PropTypes from 'prop-types';

const SectionTitle = ({title, subTitile}) => {
    return (
        <div className="flex flex-col items-center text-center space-y-3">
            <h2>{title}</h2>
            <p className='max-w-xl text-[#6B7280]'>{subTitile}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subTitile: PropTypes.string,
}

export default SectionTitle;