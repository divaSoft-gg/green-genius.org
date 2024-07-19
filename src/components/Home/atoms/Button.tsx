import ArrowLeft from "@/components/icon/ArrowLeft";
import Link from "next/link";
interface ButtonClass {
    ClassName: string;
}
export default function ButtonCTA({ ClassName }: ButtonClass) {
    return (
        <Link href="/contact"
            className={`font-semibold rounded-lg mx-auto  inline-flex items-center justify-center  py-4 px-9 hover:bg-opacity-90 ${ClassName}`}>
            Contact Our Team Now
            <ArrowLeft />
        </Link>
    );
}