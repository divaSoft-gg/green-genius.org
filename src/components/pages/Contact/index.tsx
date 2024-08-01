import { InlineWidget } from "react-calendly";
import SharedSection from "../../layouts/SharedSection";
import Button from "../../common/Button";
import Input from "../../common/Input";

const Contact = () => {
    return (
        <>
        <div className="bg-gray-50">
          <SharedSection className="!bg-gray-50">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center  ">
              <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
              <p className="my-4 lg:mb-8 font-light text-center text-gray-500  sm:text-xl">
                Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us
                know.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <form action="#" className="flex flex-col gap-4 ">
                <Input className="bg-white" type="input"  placeholder="Name" id="name" required />
                <Input className="bg-white" type="input"  placeholder="Business email" id="email" required />
                <Input className="bg-white" type="input"  placeholder="Company" id="company" required />
                <Input className="bg-white" type="input"  placeholder="Company size" id="company-size" required />
                <Input className="bg-white" type="input"  placeholder="Subject" id="subject" required />
                <Input className="bg-white" type="textarea"  placeholder="Your message" id="message" rows={6} />
                <Button type="submit"  className="w-full px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bg-primary hover:bg-bg-primary-800 focus:ring-4 focus:ring-primary-300">Send Message</Button>
              </form>
                <InlineWidget url="https://calendly.com/firas1dahmani" />
            </div>
          </SharedSection>
        </div>
        </>
    );
}

export default Contact;
