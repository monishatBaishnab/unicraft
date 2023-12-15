import Button from "../Shared/Buttons/Button";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import packages from "./pricing";
import { FaRegCheckCircle } from "react-icons/fa";

const Packages = () => {
    return (
        <div className="bg-pricing bg-no-repeat bg-cover">
            <div className="container space-y-10">
                <SectionTitle title='Pricing made for collaborative support.' subTitile='Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.' />
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        packages?.map(item =>
                            <div key={item?.id} className={`px-5 py-10 space-y-10 rounded-lg`} style={{background: item?.backgroundColor, color: item?.textColor}}>
                                <div className="space-y-3">
                                    <h4>{item?.title}</h4>
                                    <p className="text-base">{item?.description}</p>
                                </div>
                                <div className="flex items-center gap-2 text-secondery">
                                    <h2>{item?.price}</h2><span>/ Month</span>
                                </div>
                                <div>
                                    <Button background='bg-white text-primary' width={'w-full'} padding='px-4 py-2'>{item?.cta}</Button>
                                </div>
                                <div>
                                    <ul className="space-y-3">
                                        {item?.features?.map((feature, idx) => <li key={idx} className={`flex items-center gap-2 ${feature?.state === 'on' ? `text-[${item?.textColor}]` : 'text-secondery'}`}><span><FaRegCheckCircle /></span>{feature?.name}</li>)}
                                    </ul>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;