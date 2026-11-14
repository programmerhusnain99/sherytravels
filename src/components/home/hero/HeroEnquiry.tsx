import { Container } from "@/components/ui/Container";
import { HeroEnquiryForm } from "./HeroEnquiryForm";

/**
 * Enquiry form card floating over the bottom of the hero (replaces the former
 * service-pillar cards in that overlapping slot).
 */
export function HeroEnquiry() {
  return (
    <div className="relative z-20 -mt-20 pb-2 dt:-mt-24">
      <Container>
        <HeroEnquiryForm />
      </Container>
    </div>
  );
}
