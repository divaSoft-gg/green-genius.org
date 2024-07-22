import ArrowLeft from "@/components/icon/ArrowLeft";
import Link from "next/link";
import Image from 'next/image';

export default function CTA() {
    return (
        <section className="relative flex p-8">
            <div className="w-1/2 bg-black flex items-center justify-center text-left text-white p-8">
                <div className="max-w-md">
                    <h2 className="mb-4 text-4xl font-extrabold leading-tight">
                    Ready to Make a Difference ?
                    </h2>
                    <p className="mb-6 text-lg text-gray-400">
                    Join the growing number of businesses committed to sustainability.
                    </p>
                </div>
            </div>
            <div className="w-1/2 relative flex items-center justify-center bg-black p-8">
                <div className="absolute inset-0">
                    <Image 
                        src="/65dfd3b99c42d04f7d969a47_Frame40406 (1) (1).png" 
                        alt="Background Grid" 
                        layout="fill" 
                        objectFit="cover" 
                        quality={100}
                    />
                </div>
                <div className="relative z-10">
                    <Link href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300">
                        Contact Our Team Now 
                        <ArrowLeft className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
