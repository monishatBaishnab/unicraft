import logo from '../../assets/images/testimonials/logo/logo.png';
import user from '../../assets/images/testimonials/user/user.png';
const Testimonials = () => {
    return (
        <div className='bg-[#F9FAFB]'>
            <div className="container py-20">
                <div className='flex flex-col items-center space-y-5'>
                    <h4 className='flex gap-2'>
                        <img className='w-5' src={logo} alt="" />
                        Sisyphus
                    </h4>
                    <p className='text-4xl text-primary text-center'>We’ve been with unicraft to kick start every new project and can’t imagine working without it.</p>
                    <div className='flex flex-col items-center'>
                        <div className='w-10 h-10 overflow-hidden rounded-full'>
                            <img className='w-full h-full' src={user} alt="User" />
                        </div>
                        <h5>Candice Wu</h5>
                        <p>Product Manager, Sisyphus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;