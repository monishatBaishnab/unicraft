import { FaTwitter } from "react-icons/fa";
import { FaDribbble, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className="container border-t">
                <div>
                    <h4>UniCraft</h4>
                    <p className="text-[#98A2B3]">Design amazing digital experiences that create more happy in the world.</p>
                </div>
                <div className="flex justify-center md:justify-between items-center gap-2 mt-5 flex-wrap text-[#98A2B3]">
                    <p>© 2077 Untitled UI. All rights reserved.</p>
                    <div className="flex gap-2 justify-center md:justify-end">
                        <FaTwitter />
                        <FaLinkedin />
                        <FaFacebook />
                        <FaGithub />
                        <FaDribbble />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;