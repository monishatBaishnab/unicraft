import { useEffect, useState } from "react";
import Button from "../Shared/Buttons/Button";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 768 && setOpen(false))
    }, [])

    return (
        <div className="absolute left-0 right-0 top-0">
            <div className="container flex items-center justify-between py-5 h-[90px]">
                <a href="#" className="text-2xl">UniCraft</a>
                <div className={`
                absolute 
                right-5
                transition-[top_,_opacity]
                ${open ? 'top-[90px] visible opacity-100' : 'top-[85px] opacity-0'}
                bg-white 
                border 
                p-5 
                border-secondery/20 
                md:static md:p-0 
                md:border-none 
                md:bg-transparent
                md:opacity-100`}>
                    <ul className="flex items-start gap-4 flex-col md:flex-row md:items-center">
                        <li><a className="text-lg" href="#">How it works</a></li>
                        <li><a className="text-lg" href="#">Pricing</a></li>
                        <li><a className="text-lg" href="#">FAQ</a></li>
                        <li className="md:hidden"><Button padding='px-4 py-2'>Contact</Button></li>
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <Button display='hidden md:inline-block'>Contact us</Button>
                    <Button handleClick={handleClick} padding={'p-3'} display='inline-block md:hidden'><FaBars className="text-xl" /></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;