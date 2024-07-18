"use client"

import CTA from "@/components/Home/cta";
import {FAQPage} from "@/components/Home/faq";
import { faqs } from "@/lib/constant";
import { Button, Input, Textarea } from "@nextui-org/react";
import { InlineWidget } from "react-calendly";

export default function Contact() {
return (
    <main className="relative bg-white ">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center my-8 ">
        <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
        <p className="my-4 lg:mb-8 font-light text-center text-gray-500  sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us
          know.
        </p>
      </div>
      <div className="mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 md:px-16">
        <form action="#" className="flex flex-col gap-4 ">
          <Input type="text" label="Name" variant="bordered" required />
          <Input type="email" label="Business email" variant="bordered" required />
          <Input type="text" label="Company" variant="bordered" required />
          <Input type="number" label="Company size" variant="bordered" required />
          <Input type="text" label="Subject" variant="bordered" required />
          <Textarea label="Your message" variant="bordered" maxRows={6} />
          <Button type="submit" color="primary" className="w-full px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Send Message</Button>
        </form>
          <InlineWidget url="https://calendly.com/firas1dahmani" />
      </div>
      <FAQPage faqPage={faqs.contact} faqs={[]} />
      <CTA />
    </main>
);
}