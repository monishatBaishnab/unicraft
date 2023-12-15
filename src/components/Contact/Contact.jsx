import Button from "../Shared/Buttons/Button";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div className="bg-pricing bg-no-repeat bg-cover">
            <div className="container flex flex-col items-center gap-8">
                <SectionTitle title='No long-term contracts. No catches. Simple.' subTitile='Start your 30-day free trial. Cancel anytime.' />
                <Button background='bg-primary text-white'>Contact us</Button>
            </div>
        </div>
    );
};

export default Contact;