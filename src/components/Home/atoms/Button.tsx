import ArrowLeft from "@/components/icon/ArrowLeft";
import Link from "next/link";

export default function ButtonCTA() {
    return (
        <Link href="/contact"
            className="font-semibold rounded-lg mx-auto text-black inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90 ">
            Contact Our Team Now
            <ArrowLeft />
        </Link>
    );
}