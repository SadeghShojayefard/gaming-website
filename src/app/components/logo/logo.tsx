import Image from "next/image";
import Link from "next/link";

export default function Logo({ width, height }: { width: number | `${number}` | undefined, height: number | `${number}` | undefined }) {
    return (

        <>
            <Link href="#">
                <Image
                    src="/img/logo.svg"
                    width={width}
                    height={height}
                    alt="site-logo"
                    className="block"
                />
            </Link>
        </>
    );
}
