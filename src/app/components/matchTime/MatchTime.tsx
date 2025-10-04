import { FaYoutube } from "react-icons/fa6";
import { FiTwitch } from "react-icons/fi";
import { motion } from "framer-motion";


export default function MatchTime(
    { mDate,
        mTime,
    }:
        {
            mDate: string,
            mTime: string,
        }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full  flex flex-col items-center justify-center"
            >
                <div className="font-extrabold text-5xl md:text-7xl" >{mDate}</div>

                <div className="font-medium text-xl" >{mTime}</div>

                <div className="flex flex-row items-center justify-center gap-2 w-full mt-2">
                    <a href="#" className="w-fit h-fit flex flex-row items-center justify-end" >
                        <FaYoutube className="w-8 h-8" />
                    </a>

                    <a href="#" className="w-fit h-fit flex flex-row items-center justify-start"  >
                        <FiTwitch className="w-8 h-8" />
                    </a>
                </div>

            </motion.div>
        </>
    );
}

