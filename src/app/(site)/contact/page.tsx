"use client"


import FAQPage from "@/components/Home/faq";
import { Button, Input, Textarea } from "@nextui-org/react";
import { InlineWidget } from "react-calendly";

export default function Contact() {
return (
<main className="relative ">
  <section className="bg-white dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center my-8 ">
      <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="my-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us
        know.
      </p>
    </div>
    <div className="mx-auto max-w-screen-md grid grid-cols-1 lg:grid-cols-2 gap-16">
      <form action="#" className="flex flex-col gap-4">
        <Input type="email" label="Your email" variant="bordered" required />
        <Input type="text" label="Subject" variant="bordered" required />
        <Textarea label="Your message" variant="bordered" maxRows={6} />
        <Button type="submit" color="primary" className="w-full">Send Message</Button>
      </form>
        <InlineWidget url="https://calendly.com/firas1dahmani" />
    </div>
            <FAQPage />
    </section>
    </main>
  );
}