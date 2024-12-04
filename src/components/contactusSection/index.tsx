import { useTheme } from "../../hooks/useTheme";
import CenteredLayout from "../ui/centredLayout";
import { ContactUsForm } from "@aymen_diva/diva-contact-form";

export default function ContactUsSection() {
  const { theme } = useTheme();
  return (
    <section id="contact-us">
      <CenteredLayout>
        <ContactUsForm root="greenGenius" variant="variantOne" theme={theme} />
      </CenteredLayout>
    </section>
  );
}
