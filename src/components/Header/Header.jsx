import Button from "../Shared/Buttons/Button";
import adobe from '../../assets/images/adobe.png';
import amazon from '../../assets/images/amazon.png';
import slack from '../../assets/images/slack.png';
import spotify from '../../assets/images/spotify.png';
import zipier from '../../assets/images/zipier.png';
import zoom from '../../assets/images/zoom.png';

const Header = () => {
    return (
        <div className={`bg-hero bg-no-repeat bg-cover`}>
            <div className={`bg-hero-overlay bg-no-repeat bg-cover`}>
                <div className="container flex flex-col items-center text-center justify-center space-y-14 min-h-[80vh]">
                    <div className="space-y-5">
                        <h1 className="text-[42px] md:text-[72px]">Elevate Your Presence with Seamless Design and Innovation.</h1>
                        <p>From strategic planning to digital presence, we are your dedicated partner in achieving solo success.</p>
                        <Button background='bg-primary text-white'>View Pricing</Button>
                    </div>
                    <div className="mt-20 w-full">
                        <h5 className="text-secondery">Trusted By 250+ Companies</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-3">
                            <div className="flex items-center justify-center py-3.5 px-5"><img src={adobe} alt="Adobe" /></div>
                            <div className="flex items-center justify-center py-3.5 px-5"><img src={amazon} alt="Amazon" /></div>
                            <div className="flex items-center justify-center py-3.5 px-5"><img src={slack} alt="Slack" /></div>
                            <div className="flex items-center justify-center py-3.5 px-5"><img src={spotify} alt="Spotify" /></div>
                            <div className="flex items-center justify-center py-3.5 px-5"><img src={zipier} alt="Zipier" /></div>
                            <div className="flex items-center justify-center py-3.5 px-5"><img src={zoom} alt="Zoom" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;