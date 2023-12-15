import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import faqData from "./faqData";

const FAQSection = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle title='Frequently asked questions' subTitile='Everything you need to know about the product and billing.' />
                <div className="max-w-2xl mx-auto mt-10">
                    <Accordion>
                        {
                            faqData?.map(faq => <AccordionItem initialEntered={faq?.initialEntered} className='border-b pb-3' key={faq.question} header={<h5>{faq?.question}</h5>}>
                                <p className="text-[#6B7280] mt-2">{faq?.answer}</p>
                            </AccordionItem>)
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;