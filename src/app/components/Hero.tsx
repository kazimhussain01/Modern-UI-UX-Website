import Image from "next/image"

import BlueArrow from "../../../public/assets/blue-button.svg"
import Gradient from "../../../public/assets/Gradient.svg"
import HeroImage from "../../../public/assets/Image.svg"
import Google from "../../../public/assets/Google.svg"
import Slack from "../../../public/assets/Slack.svg"
import Trustpilot from "../../../public/assets/Trustpilot.svg"
import Cnn from "../../../public/assets/CNN.svg"
import Clutch from "../../../public/assets/Clutch.svg"


export default function Hero() {
    return (
        //! Main Div 
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">

                {/* Add Title */}
                <h1 className="text-center text-[32px] leading-[40px] text-[#172026] lg:text-[64px] lg:leading-[72px] font-bold font-poppins">
                    Start monitoring your website like a pro
                </h1>

                {/* Add Description */}
                <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7 font-poppins">
                    Get a birds eye with our customizable dashboard, stay on top of things! Revamp your work process with our game-changing feature, Boost productivity and efficiency!
                </p>

                {/* Add Button */}
                <div className="flex w-full pt-8 justify-center gap-x-6">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] font-poppins lg:w-fit">
                        Try for free
                    </button>
                    <button className="w-1/2 text-[4328EB] flex items-center justify-center gap-x-2 font-poppins lg:w-fit">
                        View Pricing
                        {/* Add Blue Arrow Button */}
                        <span>
                            <Image src={BlueArrow} alt="Learn more" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Add Gradient Image */}
            <div className="relative flex h-full w-full justify-center">
                <Image
                    src={Gradient}
                    alt="Gradient"
                    className="min-h-[500px] w-full object-cover lg:h-auto"
                />

                {/* Add Hero Image */}
                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
                    />
                    {/* Add Text */}
                    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between  lg:px-20">
                        <p className="text-[#FFFFFF] text-center lg:text-[18px] font-poppins">
                            Trusted by these companies
                        </p>
                        {/* Add Logos */}
                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                            <Image src={Google} alt="google" />
                            <Image src={Slack} alt="Slack" />
                            <Image src={Trustpilot} alt="Trustpilot" />
                            <Image src={Cnn} alt="Cnn" />
                            <Image src={Clutch} alt="Clutch" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}