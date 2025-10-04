import Image from "next/image";
import CustomButton from "@/app/components/customButton/CustomButton";

export default function Hero() {
    return (

        <>
            <div className=" mt-[100px] md:mt-0 min-h-[60vh] md:min-h-[calc(100vh)] flex flex-col w-full items-center justify-end  gap-10
            border-b-[4px] border-transparent [border-image:linear-gradient(90deg,transparent_0%,#9841ff_50%,transparent_100%)_1]">

                <p className=" font-semibold md:text-3xl uppercase mt-10 w-full text-center">Enjoy The Games</p>

                <h1 className="text-3xl font-bold md:text-5xl text-center">Epic Games Made For <br /> True Gamers!</h1>
                <div className="w-full flex flex-row items-center justify-center">
                    <CustomButton clipPath="--clip-path-3" text="Join With Us" />
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="relative mt-[50px]">
                        <Image
                            src={"/img/hero-banner.png"}
                            width="850" height="414"
                            className="w-full"
                            alt="hero banner"
                        />

                        <img src="/img/hero-banner-bg.png" alt=""
                            className="hidden md:block w-full absolute bottom-0 left-0 scale-[1.5] origin-bottom -z-10"></img>


                    </div>
                </div>

            </div>
        </>
    );
}
