import Image from "next/image"

import Logo from "../../../public/assets/Logo.svg"
import User from "../../../public/assets/User.svg"
import Menu from "../../../public/assets/Menu.svg"


const navLink = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Enterprise' },
    { name: 'Careers' },
]

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center w-full px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            {/* Add Logo and Main Div Class for Left side */}
            <div className="flex items-center">
                <Image src={Logo} alt="Logo" />

                {/* Add NavLinks */}
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLink.map((item, index) => {
                        return (
                            <p key={index} className="text-[#36485C] font-medium font-poppins">
                                {item.name}
                            </p>
                        )
                    })}
                </div>
            </div>

            {/*Main Div Class Right side */}
            <div className="flex gap-x-5">
                {/* Open an Account Text */}
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] font-poppins">Open an Account</p>
                {/* User Profile Image and Sign In */}
                <div className="flex items-center gap-x-2">
                    <Image src={User} alt="User Profile" />
                    <span className="hidden lg:block font-medium text-[#36485C] font-poppins">Sign in</span>
                </div>
                {/* Add Menu Image on Mobile view */}
                <Image src={Menu} alt="Menu Button" className="lg:hidden" />
            </div>
        </nav>
    )
}