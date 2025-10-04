export default function Title(
    {
        clipPath,
        text,
        cardPos
    }:
        {
            clipPath: string,
            text: string
            cardPos: "left-3/7" | "right-3/7" | "left-0"
        }) {
    return (

        <>
            <div
                className={`
                     absolute grid place-items-center overflow-hidden
                     bottom-0 ${cardPos}
    md:min-w-[180px] md:h-[50px] md:max-w-max md:px-[30px]
    min-w-[140px] h-[50px] px-[20px]

    font-bold  text-white 
       
    [background-image:linear-gradient(to_right_bottom,hsl(299,100%,52%),hsl(291,100%,58%),hsl(283,100%,60%),hsl(273,100%,62%),hsl(262,100%,63%),hsl(242,100%,69%),hsl(223,100%,62%),hsl(210,100%,50%),hsl(203,100%,50%),hsl(198,100%,50%),hsl(192,100%,48%),hsl(185,90%,48%))]
    before:content-[''] before:absolute before:top-1/2 before:left-1/2
    before:w-[250%] before:pb-[250%] before:[background-color:hsla(267,100%,63%,1)]
    before:rounded-full before:-z-10 before:transition-transform before:duration-300
    before:translate-x-[-50%] before:translate-y-[-50%] before:scale-0
     focus-visible:before:scale-100
                    `}

                style={{ clipPath: `var(${clipPath})` }}
            >
                {text}
            </div>
        </>
    );
}
