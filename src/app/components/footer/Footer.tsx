import FooterButton from "../footerButton/FooterButton";
import Logo from "@/app/components/logo/logo";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
import CustomButton from "@/app/components/customButton/CustomButton";


export default function Footer() {
    return (
        <>
            <div className=" flex flex-col w-full items-center justify-start gap-10 mt-48 ">

                <div className="w-full max-w-6xl grid grid-cols-1  md:grid-cols-4   place-items-center gap-y-10 gap-x-5 text-lg font-medium text-left">

                    {/* coulmn 1 */}
                    <div className=" flex flex-col w-full items-center justify-start gap-5 md:aspect-square">
                        <div className="w-full flex flex-row items-center justify-start ">
                            <Logo width={180} height={73} />
                        </div>
                        <div className="w-full flex flex-row items-center justify-start px-5">
                            <p >
                                Our success in creating business solutions is due in large part to our talented and highly committed team.
                            </p>
                        </div>
                        <div className="w-full flex flex-row items-center justify-start px-5 gap-2">
                            <FooterButton clipPath="--clip-path-8" IconName={MdFacebook} />
                            <FooterButton clipPath="--clip-path-8" IconName={FaTwitter} />
                            <FooterButton clipPath="--clip-path-8" IconName={IoLogoInstagram} />
                            <FooterButton clipPath="--clip-path-8" IconName={FaYoutube} />
                        </div>

                    </div>

                    {/* coulmn 2 */}
                    <div className=" flex flex-col w-full items-center justify-start gap-5 md:aspect-square">
                        <div className="w-full flex flex-row items-center justify-start px-5 text-xl font-bold">
                            <p className="
                            text-left
                              relative inline
                                bg-[linear-gradient(to_left,#9742ff,#9742ff)]
                                bg-no-repeat
                                bg-[length:50%_5px]
                                bg-[position:left_top_25px]
                            ">
                                Usefull Links
                            </p>

                        </div>

                        <ul className="w-full px-5 font-normal text-xl flex flex-col gap-2">
                            <li>
                                <Link href="#" className="w-full hover:text-[#9742ff] transition-all duration-300 ease-in-out">Tournaments</Link>
                            </li>

                            <li>
                                <Link href="#" className="w-full hover:text-[#9742ff] transition-all duration-300 ease-in-out">Help Center</Link>
                            </li>

                            <li>
                                <Link href="#" className="w-full hover:text-[#9742ff] transition-all duration-300 ease-in-out">Privacy and Policy</Link>
                            </li>

                            <li>
                                <Link href="#" className="w-full hover:text-[#9742ff] transition-all duration-300 ease-in-out">Terms of Use</Link>
                            </li>

                            <li>
                                <Link href="#" className="w-full hover:text-[#9742ff] transition-all duration-300 ease-in-out">Contact Us</Link>
                            </li>

                        </ul>

                    </div>




                    {/* coulmn 3 */}
                    <div className=" flex flex-col w-full items-center justify-start gap-5 md:aspect-square">
                        <div className="w-full flex flex-row items-center justify-start px-5 text-xl font-bold">
                            <p className="
                            text-left
                              relative inline
                                bg-[linear-gradient(to_left,#9742ff,#9742ff)]
                                bg-no-repeat
                                bg-[length:50%_5px]
                                bg-[position:left_top_25px]
                            ">
                                Contact Us
                            </p>

                        </div>

                        <ul className="w-full px-5 font-normal text-xl flex flex-col gap-3"
                        >
                            <li>
                                <div className="w-full flex flex-col items-start justify-start gap-0 text-left">
                                    <p className="text-[#9742ff]">
                                        Location:
                                    </p>
                                    <p >
                                        153 Williamson Plaza, Maggieberg, MT 09514
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="w-full flex flex-col items-start justify-start gap-0 text-left">
                                    <p className="text-[#9742ff]">
                                        Join Us:
                                    </p>
                                    <a href="#" className="w-full ">sadegh@gmail.com</a>

                                </div>                            </li>

                            <li>
                                <div className="w-full flex flex-col items-start justify-start gap-0 text-left">
                                    <p className="text-[#9742ff]">
                                        Phone:
                                    </p>
                                    <a href="#" className="w-full ">sadegh@gmail.com</a>

                                </div>
                            </li>
                        </ul>

                    </div>

                    {/* coulmn 4 */}
                    <div className=" flex flex-col w-full items-center justify-start gap-5 md:aspect-square">
                        <div className="w-full flex flex-row items-center justify-start px-5 text-xl font-bold">
                            <p className="
                            text-left
                              relative inline
                                bg-[linear-gradient(to_left,#9742ff,#9742ff)]
                                bg-no-repeat
                                bg-[length:50%_5px]
                                bg-[position:left_top_25px]
                            ">
                                Newsletter Signup
                            </p>

                        </div>

                        <form className="w-full flex flex-col items-start justify start gap-3 px-5">
                            <input type="email" placeholder="YourEmail"
                                className="bg-[#0d0c36] border border-[#9742ff] px-[18px] py-4 text-white outline-none" required />
                            <CustomButton clipPath="--clip-path-3" text="Subscribe Now" />
                        </form>

                    </div>

                </div>


                <div className="w-full flex flex-row items-center justify-center bg-[#0d0c36]/30 h-20 text-center backdrop-blur-2xl">
                    <p className="  text-lg ">
                        2025 coding.shojayefard All Rights Reserved.
                    </p>
                </div>
            </div >
        </>
    );
}
