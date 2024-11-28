import CenteredLayout from "../ui/centredLayout";
import { ContactUsForm } from "@aymen_diva/diva-contact-form";

export default function ContactUsSection() {
  return (
    <section id="contact-us">
      <CenteredLayout>
        <ContactUsForm root="greenGenius" variant="variantOne" />
      </CenteredLayout>
    </section>
  );
}
