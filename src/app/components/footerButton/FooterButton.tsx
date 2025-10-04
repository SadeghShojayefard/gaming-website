import { IconType } from "react-icons";



export default function FooterButton({ clipPath, IconName }: { clipPath: string, IconName: IconType }) {
    return (

        <>
            <a
                href="#"
                className={`
                     relative grid place-items-center overflow-hidden
w-10 h-10
    font-semibold text-white text-lg
    [background-color:hsla(267,100%,63%,0.3)]
    before:content-[''] before:absolute before:top-1/2 before:left-1/2
    before:w-[250%] before:pb-[250%] before:[background-color:hsla(267,100%,63%,1)]
    before:rounded-full before:-z-10 before:transition-transform before:duration-300
    before:translate-x-[-50%] before:translate-y-[-50%] before:scale-0
    hover:before:scale-100 focus-visible:before:scale-100
                    `}

                style={{ clipPath: `var(${clipPath})` }}
            >
                <IconName />
            </a>
        </>
    );
}
