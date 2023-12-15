// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import portfolio1 from '../../assets/images/portfolio/portfolio-1.png';
import portfolio2 from '../../assets/images/portfolio/portfolio-2.png';
import portfolio3 from '../../assets/images/portfolio/portfolio-3.png';
import Button from '../Shared/Buttons/Button';


const Portfolio = () => {
    return (
        <div className='max-w-[1920px] pb-20'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={true}
                initialSlide={2}
                className="projects flex justify-[center_!important]"
            >
                <SwiperSlide className='w-[360px_!important] h-[400px_!important]'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={portfolio1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[360px_!important] h-[400px_!important]'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={portfolio2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[360px_!important] h-[400px_!important]'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={portfolio3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[360px_!important] h-[400px_!important]'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={portfolio3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[360px_!important] h-[400px_!important]'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={portfolio3} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex justify-center mt-10'>
            <Button>View recent work</Button>
            </div>
        </div>
    );
};

export default Portfolio;