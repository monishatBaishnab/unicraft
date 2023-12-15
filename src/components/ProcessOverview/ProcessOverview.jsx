import arrow from '../../assets/images/arrow.png';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import {motion} from 'framer-motion';

const ProcessOverview = () => {
    const process = [
        {
            number: 1,
            title: 'Subscribe',
            desc: 'Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.',
            arrow
        },
        {
            number: 2,
            title: 'Request',
            desc: "Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours",
            arrow
        },
        {
            number: 3,
            title: 'Revise',
            desc: "Need changes? We guarantee unlimited revisions until you're 200% satisfied.",
        }
    ]
    return (
        <div className="mb-10 hidden md:block">
            <div className="container border border-[#E5E7EB] rounded-lg shadow-xl shadow-[rgba(28,_25,_23,_0.05)] space-y-10">
                <SectionTitle title='How it works' subTitile='Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.' />
                
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        process.map(({number, title, desc, arrow}) => <motion.div whileHover={{scale: 1.02}} key={title} className="flex flex-col items-center text-center relative">
                            <h1 className="bg-gradient-to-t from-white to-[#D8B4FE] bg-clip-text text-transparent font-extrabold text-[140px] -mb-16">{number}</h1>
                            <h3>{title}</h3>
                            <p className="text-secondery px-10">{desc}</p>
                            {
                                arrow && <div className='absolute -right-10 bottom-0 top-0 my-auto flex items-center w-20 h-20'>
                                    <img className='w-full h-full object-contain' src={arrow} alt="" />
                                </div>
                            }
                        </motion.div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProcessOverview;