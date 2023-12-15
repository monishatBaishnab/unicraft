import arrow from '../../assets/images/arrow.png';

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
        <div className="mb-10">
            <div className="container border border-[#E5E7EB] rounded-lg shadow-xl shadow-[rgba(28,_25,_23,_0.05)] space-y-10">
                <div className="flex flex-col items-center text-center space-y-2">
                    <h2>How it works</h2>
                    <p>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        process.map(({number, title, desc, arrow, idx }) => <div key={idx} className="flex flex-col items-center text-center relative">
                            <h1 className="bg-gradient-to-t from-white to-[#D8B4FE] bg-clip-text text-transparent font-extrabold text-[140px] -mb-16">{number}</h1>
                            <h3>{title}</h3>
                            <p className="text-secondery px-10">{desc}</p>
                            {
                                arrow && <div className='absolute right-0 bottom-0 top-0 my-auto flex items-center w-20 h-20'>
                                    <img className='w-full h-full object-contain' src={arrow} alt="" />
                                </div>
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProcessOverview;