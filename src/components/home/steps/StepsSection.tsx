import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";

type Step = {
  num: string;
  title: string;
  bodyDesktop: string;
  bodyMobile: string;
  img: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Get in Touch",
    bodyDesktop: "Call us or fill the enquiry form. Share your dates, group size and budget.",
    bodyMobile: "Call us or fill the enquiry form with your dates and budget.",
    img: "/images/home/home-step-1.webp",
  },
  {
    num: "02",
    title: "Choose Your Package",
    bodyDesktop: "We propose tailored options — flights, hotels, ziyarat — and you pick the right one.",
    bodyMobile: "We propose tailored options and you pick the one that feels right.",
    img: "/images/home/home-step-2.webp",
  },
  {
    num: "03",
    title: "Confirm & Pay",
    bodyDesktop: "Lock in with a deposit. We handle visa, flights and hotel confirmations.",
    bodyMobile: "Lock in with a deposit. We handle visa, flights and hotels.",
    img: "/images/home/home-step-3.webp",
  },
  {
    num: "04",
    title: "Travel with Peace",
    bodyDesktop: "Fly out knowing everything is arranged. Our team meets you and stays with you.",
    bodyMobile: "Fly out knowing everything is arranged. Our team stays with you.",
    img: "/images/home/home-step-4.webp",
  },
];

// x-centre of each step column within the 1200-wide desktop coordinate space.
const DT_X = [80, 380, 680, 980];

/** "How it works" — four steps joined by a decorative dashed gold curve. */
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
        <div className="mb-9 text-center dt:mb-14">
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

        {/* Mobile — stacked, alternating sides, vertical dashed curve */}
        <div className="relative dt:hidden">
          <svg
            viewBox="0 0 350 680"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              d="M 50 50 C 50 120, 300 120, 300 200 S 50 280, 50 360 C 50 440, 300 440, 300 520 S 50 600, 50 660"
              stroke="#DBB725"
              strokeWidth={3}
              strokeDasharray="10 8"
              strokeOpacity={0.5}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative flex flex-col gap-[26px]">
            {STEPS.map((step, i) => {
              const even = i % 2 === 1;
              return (
                <li
                  key={step.num}
                  className={`flex flex-col ${
                    even ? "items-end pl-10 text-right" : "items-start pr-10 text-left"
                  }`}
                >
                  <div className="relative z-10 mb-2.5 h-[104px] w-full overflow-hidden rounded-2xl border-[2.5px] border-gold bg-lightblue">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 0px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-1 font-serif text-[26px] font-bold leading-none text-gold/25">
                    {step.num}
                  </div>
                  <h3 className="mb-1.5 font-serif text-[18px] font-bold leading-[1.28] text-white">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] font-light leading-[1.58] text-white/90 text-pretty">
                    {step.bodyMobile}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Desktop — four columns, circular photos, horizontal dashed S-curve */}
        <div className="relative mx-auto hidden h-[320px] w-full max-w-[1200px] dt:block">
          <svg
            viewBox="0 0 1200 320"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {["M 80 90 C 80 185, 380 185, 380 90", "M 380 90 C 380 185, 680 185, 680 90", "M 680 90 C 680 185, 980 185, 980 90"].map(
              (d) => (
                <path
                  key={d}
                  d={d}
                  stroke="#DBB725"
                  strokeWidth={3}
                  strokeDasharray="12 10"
                  strokeOpacity={0.55}
                  vectorEffect="non-scaling-stroke"
                />
              ),
            )}
          </svg>

          <ol>
            {STEPS.map((step, i) => (
              <li
                key={step.num}
                className="absolute top-0 flex w-40 -translate-x-1/2 flex-col items-center text-center"
                style={{ left: `${(DT_X[i] / 1200) * 100}%` }}
              >
                <div className="relative z-10 mb-1.5 h-[90px] w-[90px] overflow-hidden rounded-full border-[2.5px] border-gold bg-lightblue">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    sizes="90px"
                    className="object-cover"
                  />
                </div>
                <div className="mb-2.5 font-serif text-[38px] font-bold leading-none text-gold/20">
                  {step.num}
                </div>
                <h3 className="mb-2.5 font-serif text-[20px] font-bold leading-[1.26] text-white">
                  {step.title}
                </h3>
                <p className="text-[14.5px] font-light leading-[1.58] text-white/90 text-pretty">
                  {step.bodyDesktop}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
