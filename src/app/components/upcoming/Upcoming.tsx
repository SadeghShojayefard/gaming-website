"use client"
import Card from "@/app/components/card/Card";
import MatchTime from "@/app/components/matchTime/MatchTime";
import { motion } from "framer-motion";


export default function Upcoming() {
    return (
        <>
            <div className="min-h-screen flex flex-col w-full items-center justify-start gap-10">

                {/* عنوان */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full text-center">
                    <p className="text-lg font-semibold md:text-2xl uppercase mt-24">
                        Upcoming Matches
                    </p>
                    <h2 className="text-3xl font-bold md:text-5xl text-center">
                        Battles Extreme <br /> Masters <span className="text-[#9742ff]">Tournament</span>
                    </h2>
                    <p className="font-light text-lg mx-6 md:mx-auto mb-[40px] max-w-[480px]">
                        Our success in creating business solutions is due in large part to our talented and highly committed team.
                    </p>
                </motion.div>

                {/* کارت‌ها */}
                <div className="w-full max-w-6xl grid grid-cols-1  md:grid-cols-3   place-items-center gap-y-10 md:gap-y-28 ">
                    <Card clipPath="--clip-path-3" text="Purple Death Cadets " cardJustify="justify-end"
                        cardTxtAlign="text-right" imgName="team-logo-1.png" cardImgAlign="left"
                        title="Group 04 | Match 06th" titleCardPos="left-3/7" titleclipPath="--clip-path-5"
                        initMotion="l"
                    />

                    <MatchTime mDate="10:00" mTime="25TH May 2024" />


                    <Card clipPath="--clip-path-6" text="Trigger Brain Squad" cardJustify="justify-start"
                        cardTxtAlign="text-left" imgName="team-logo-2.png" cardImgAlign="right"
                        title="Group 04 | Match 06th" titleCardPos="right-3/7" titleclipPath="--clip-path-7"
                        initMotion="r"
                    />

                    <Card clipPath="--clip-path-3" text="The Black Hat Hackers " cardJustify="justify-end"
                        cardTxtAlign="text-right" imgName="team-logo-3.png" cardImgAlign="left"
                        title="Group 05 | Match 02nd" titleCardPos="left-3/7" titleclipPath="--clip-path-5"
                        initMotion="l"
                    />

                    <MatchTime mDate="12:30" mTime="10TH Jan 2024" />


                    <Card clipPath="--clip-path-6" text="Your Worst Nightmare" cardJustify="justify-start"
                        cardTxtAlign="text-left" imgName="team-logo-4.png" cardImgAlign="right"
                        title="Group 05 | Match 02nd" titleCardPos="right-3/7" titleclipPath="--clip-path-7"
                        initMotion="r"
                    />


                    <Card clipPath="--clip-path-3" text="Witches And Quizards " cardJustify="justify-end"
                        cardTxtAlign="text-right" imgName="team-logo-5.png" cardImgAlign="left"
                        title="Group 02 | Match 03rd" titleCardPos="left-3/7" titleclipPath="--clip-path-5"
                        initMotion="l"
                    />

                    <MatchTime mDate="04:20" mTime="15th Dec 2024" />


                    <Card clipPath="--clip-path-6" text="Resting Bitch Faces" cardJustify="justify-start"
                        cardTxtAlign="text-left" imgName="team-logo-6.png" cardImgAlign="right"
                        title="Group 02 | Match 03rd" titleCardPos="right-3/7" titleclipPath="--clip-path-7"
                        initMotion="r"
                    />



                </div>
            </div>
        </>
    );
}
