import {
  GeneralButton,
  GeneralColWrapper,
  GeneralDemoCallToAction,
  GeneralDescription,
  GeneralTitle,
} from "@aymen_diva/diva-demo-call-to-action";
import CentredLayout from "../../ui/centredLayout";
import { useMediaQuery } from "react-responsive";

export default function CTACard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section>
      <CentredLayout>
        <GeneralDemoCallToAction
          direction="row"
          hasPadding={isMobile}
          darkModeCardBackground="#000000"
        >
          <GeneralColWrapper>
            <GeneralTitle textColor="#000000" darkTextColor="#ffffff" />
            <GeneralDescription textColor="#000000" />
            <GeneralButton width="half" buttonPath="/contact-us" />
          </GeneralColWrapper>
        </GeneralDemoCallToAction>
      </CentredLayout>
    </section>
  );
}
