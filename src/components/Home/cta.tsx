import ArrowLeft from "@/components/icon/ArrowLeft";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-white   ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 ">Ready to Make a Difference?</h2>
                    <p className="mb-6 font-light text-gray-500  md:text-lg">Join the growing number of businesses committed to sustainability.</p>
                    <Link href="/contact"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                        Contact Our Team Now
                        <ArrowLeft />
                    </Link>
                </div>
            </div>
        </section>
    );
}