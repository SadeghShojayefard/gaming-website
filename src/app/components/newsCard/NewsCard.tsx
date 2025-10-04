import Image from "next/image";
import Title from "@/app/components/title/Title";
import { GoPerson } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { motion } from "framer-motion";


export default function NewsCard
    (
        {
            imgName,
            sectionText,
            newsDate,
            auther,
            newsTitle,
            newsText
        }
            :
            {
                imgName: string,
                sectionText: string,
                newsDate: string,
                auther: string
                newsTitle: string
                newsText: string
            }
    ) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className=" flex flex-col w-full items-center justify-start gap-5 bg-[#0d0c36] pb-5"
            >
                <div className="relative w-full h-[250px]">
                    <Image
                        src={`/img/${imgName}`}
                        fill={true}
                        alt={imgName}
                        className="object-cover"
                    />
                    <Title clipPath="--clip-path-3" cardPos="left-0" text={sectionText} />
                </div>
                <div className="w-full flex flex-row justify-evenly items-center px-10 font-bold">
                    <div className="w-full flex flex-row justify-start items-center gap-2">
                        <IoCalendarOutline className="text-[#9742ff] w-5 h-5" />
                        <p >
                            {newsDate}
                        </p>
                    </div>
                    <div className="w-full flex flex-row justify-start items-center gap-2">
                        <GoPerson className="text-[#9742ff] w-5 h-5" />
                        <p >
                            {auther}
                        </p>
                    </div>


                </div>
                <div className="w-full   text-left font-bold text-xl px-10">
                    <Link
                        href="#"
                        className="
                                relative inline
                                bg-[linear-gradient(to_left,#9742ff,#9742ff)]
                                bg-no-repeat
                                bg-[length:0%_2px]
                                bg-left-bottom
                                transition-[background-size] duration-400 ease-in-out
                                hover:bg-[length:100%_2px]
                                focus-visible:bg-[length:100%_2px]
                            "
                    >
                        {newsTitle}
                    </Link>                </div>

                <div className="w-full   text-left  text-xl px-10">
                    <p>
                        {newsText}
                    </p>

                </div>

                <div className="w-full flex flex-row justify-start items-center px-10 font-bold">
                    <div className="w-full flex flex-row justify-start items-center gap-2">
                        <GoDash className="text-[#9742ff] w-5 h-5" />
                        <Link
                            href="#"
                            className="hover:text-[#9742ff] transition-all duration-300 ease-in-out w-full"
                        >
                            Read More
                        </Link>
                    </div>



                </div>
                {/* GoDash */}
            </motion.div>
        </>
    );
}
