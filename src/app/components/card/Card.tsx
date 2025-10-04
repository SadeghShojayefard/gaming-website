import Image from "next/image";
import Title from "@/app/components/title/Title";
import { motion } from "framer-motion";


export default function Card(
    { clipPath,
        text,
        cardJustify,
        cardTxtAlign,
        imgName,
        cardImgAlign,
        title,
        titleCardPos,
        titleclipPath,
        initMotion,
    }:
        {
            clipPath: string,
            text: string,
            cardJustify: "justify-start" | "justify-end"
            cardTxtAlign: "text-right" | "text-left"
            imgName: string,
            cardImgAlign: "left" | "right"
            title: string,
            titleCardPos: "left-3/7" | "right-3/7",
            titleclipPath: string
            initMotion: "l" | "r"
        }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: initMotion === "l" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className={` relative 
            w-[360px] min-h-[160px]
                md:w-[446px] md:min-h-[180px] 
                
                flex flex-row items-center ${cardJustify} overflow-visible `}>

                <div
                    className={`
                        relative grid place-items-center overflow-hidden
                        md:w-[400px] md:h-[110px]  md:px-[35px]
                        w-[290px] h-[90px] px-[25px]  
                          
                    [background-image:linear-gradient(to_right_bottom,hsla(299,100%,52%,0.3),hsla(291,100%,58%,0.3),hsla(283,100%,60%,0.3),hsla(273,100%,62%,0.3),hsla(262,100%,63%,0.3),hsla(242,100%,69%,0.3),hsla(223,100%,62%,0.3),hsla(210,100%,50%,0.3),hsla(203,100%,50%,0.3),hsla(198,100%,50%,0.3),hsla(192,100%,48%,0.3),hsla(185,90%,48%,0.3))]
                            before:content-[''] before:absolute before:top-1/2 before:left-1/2
                            before:w-[250%] before:pb-[250%] before:[background-color:hsla(267,100%,63%,0.3)]
                        before:rounded-full before:-z-10 before:transition-transform before:duration-300
                        before:translate-x-[-50%] before:translate-y-[-50%] before:scale-0
                        focus-visible:before:scale-100
                        font-bold text-2xl md:text-3xl uppercase
                                        ${cardTxtAlign}
                    `}
                    style={{ clipPath: `var(${clipPath})` }}
                >
                    {text}
                </div>


                <Image
                    src={`/img/${imgName}`}
                    width={190}
                    height={180}
                    alt="team-logo-1"
                    className={`absolute top-0 
                        ${cardImgAlign == "left" ? "-left-1/12 md:-left-2/12" : "-right-1/12 md:-right-2/12"}
                         w-[150px] h-[140px] md:w-[190px] md:h-[180px]`}
                />
                <Title clipPath={titleclipPath} text={title} cardPos={titleCardPos} />

            </motion.div>

        </>
    );
}

