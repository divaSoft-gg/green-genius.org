import Adress from "@/components/icon/Adress";
import Email from "@/components/icon/Email";
import Phone from "@/components/icon/phone";
import { Button, Input, Textarea } from "@nextui-org/react";
import FAQPage from "../Home/faq";
import CTA from "../Home/cta";
import { InlineWidget, PopupWidget } from "react-calendly";
import CustomPopupWidget from "@/components/PopupWidget";

export default function ContactForm() {
    return (
        <>
            {/* <div id="root" /> */}
            <section className="bg-white dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center py-4">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>
                </div>
                <div className="py-4  px-4 mx-auto max-w-screen-md grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <form action="#" className="space-y-2">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <Input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@green-genius.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <Input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <Textarea id="message" maxRows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
                            </div>
                            <Button type="submit" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">Send message</Button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center space-y-2">

                        <div>
                            <InlineWidget url="https://calendly.com/firas1dahmani" />
                        </div>
                    </div>
                </div>
                <CTA />
                <FAQPage />
            </section>
        </>
    );
}