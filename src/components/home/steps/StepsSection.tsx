import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";

type Step = {
  num: string;
  title: string;
  body: string;
  img: string;
};

// Content verbatim from the live site's "Simple Steps to Follow" section.
const STEPS: Step[] = [
  {
    num: "01",
    title: "Inquiry and Consultation",
    body: "Begin your journey by contacting us with your travel plans and desires. We’ll listen to your needs and help you find the best options for your desired pilgrimage. Our team is here to ensure you get personalized recommendations.",
    img: "/images/home/home-step-1.webp",
  },
  {
    num: "02",
    title: "Documentation Submission",
    body: "We will share the list of required documents, such as identity card copies, passports, visas, and latest passport-size pictures, etc. Plus, we will submit and coordinate visa processing, accommodation, and transportation details.",
    img: "/images/home/home-step-2.webp",
  },
  {
    num: "03",
    title: "Payment and Confirmation",
    body: "We offer a simple but transparent payment process. Once payment is completed, you will receive a confirmation message or an email on the shared contact details, notifying you that your pilgrimage arrangements are secured.",
    img: "/images/home/home-step-3.webp",
  },
  {
    num: "04",
    title: "Preparation and Support",
    body: "We will provide you with all the information and support you need pre-departure so that you are fully prepared. This includes guidance on what to pack, travel tips, and any important practices to be aware of during your spiritual journey.",
    img: "/images/home/home-step-4.webp",
  },
];

/** "How it works" — four steps joined by a decorative dashed gold connector. */
export function StepsSection() {
  return (
    <Section bg="navy" className="relative overflow-hidden py-14 dt:py-24">
      {/* Decorative rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full border border-gold/20 dt:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 hidden h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-gold/25 dt:block"
      />

      <Container className="relative">
        {/* Header */}
        <div className="mb-10 text-center dt:mb-16">
          <Eyebrow align="center" tone="white" className="mb-4">
            How it works
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Your Journey to a Spiritual Pilgrimage: "
            accent="Simple Steps"
            after=" to Follow"
            className="mx-auto max-w-[860px] text-[28px] leading-[1.22] text-white dt:text-[42px] dt:leading-[1.16]"
          />
        </div>

        {/* Desktop — four columns with a dashed connector behind the circles */}
        <div className="relative mx-auto hidden max-w-[1180px] dt:block">
          {/* Dashed connector line through the circle centres (circles are 90px tall → centre ≈ 45px) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[45px] border-t-2 border-dashed border-gold/40"
          />
          <ol className="relative grid grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <li key={step.num} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 h-[90px] w-[90px] overflow-hidden rounded-full border-[2.5px] border-gold bg-lightblue">
                  <Image src={step.img} alt={step.title} fill sizes="90px" className="object-cover" />
                </div>
                <div className="mb-2 font-serif text-[34px] font-bold leading-none text-gold/25">
                  {step.num}
                </div>
                <h3 className="mb-2.5 font-serif text-[20px] font-bold leading-[1.26] text-white">
                  {step.title}
                </h3>
                <p className="text-[14.5px] font-light leading-[1.6] text-white/85 text-pretty">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile — vertical stepper with a dashed rail */}
        <ol className="relative flex flex-col gap-7 dt:hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-[23px] top-6 border-l-2 border-dashed border-gold/35"
          />
          {STEPS.map((step) => (
            <li key={step.num} className="relative flex gap-4">
              <div className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-[2px] border-gold bg-navy font-serif text-[16px] font-bold text-gold">
                {step.num}
              </div>
              <div className="pt-0.5">
                <h3 className="mb-1.5 font-serif text-[18px] font-bold leading-[1.28] text-white">
                  {step.title}
                </h3>
                <p className="text-[14.5px] font-light leading-[1.6] text-white/85 text-pretty">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
