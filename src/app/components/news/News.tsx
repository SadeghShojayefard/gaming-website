"use client"

import NewsCard from "@/app/components/newsCard/NewsCard";
import { motion } from "framer-motion";

export default function News() {
    return (
        <>
            <div className="min-h-screen flex flex-col w-full items-center justify-start gap-10">

                {/* عنوان */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full text-center"
                >
                    <p className="text-xl font-semibold md:text-2xl uppercase mt-44">What's On Our Mind</p>
                    <h2 className="text-3xl font-bold md:text-5xl text-center">
                        News And <span className="text-[#9742ff]">Headlines</span>
                    </h2>

                    <p className="font-light text-lg mx-6 md:mx-auto mb-[40px] max-w-[480px]">
                        Our success in creating business solutions is due in large part to our talented and highly committed team.
                    </p>
                </motion.div>

                {/* کارت‌ها */}
                <div className="w-full max-w-6xl grid grid-cols-1  md:grid-cols-3   place-items-center gap-y-10 gap-x-5 px-5 md:px-0 ">

                    <NewsCard imgName="news-1.jpg" sectionText="BUSINESS" newsDate="Jan 01 2022" auther="Elliot Alderson"
                        newsTitle="Innovative Business All Over The World."
                        newsText="Financial experts support or help you to to find out which way you can raise your funds more..."
                    />
                    <NewsCard imgName="news-2.jpg" sectionText="STARTUP" newsDate="Jan 01 2022" auther="Elliot Alderson"
                        newsTitle="How To Start Initiating An Startup In Few Days."
                        newsText="Financial experts support or help you to to find out which way you can raise your funds more..."
                    />
                    <NewsCard imgName="news-3.jpg" sectionText="FINANCE" newsDate="Jan 01 2022" auther="Elliot Alderson"
                        newsTitle="Financial Experts Support Help You To Find Out."
                        newsText="Financial experts support or help you to to find out which way you can raise your funds more..."
                    />



                </div>
            </div>
        </>
    );
}
